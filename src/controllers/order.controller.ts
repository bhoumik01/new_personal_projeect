import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { v4 as uuidv4 } from 'uuid';
import { OrderStatus, PaymentStatus } from '../../generated/prisma/index';
import { prisma } from '../../lib/initiatePrisma';
import { zapUPIService } from '../services/zapupi.service';
import { smmService } from '../services/ssm.service';
import { telegramService } from '../services/telegram.service';
import { rabbitMQService, QUEUES } from '../services/rabbitmq.service';
import { createError } from '../middleware/errorHandler';
import { logger } from '../utils/logger';
import { env } from '../config/env';
import { ApiResponse } from '../types';
import { getPlatformNameFromUrl } from '../utils/platform.util';
import { getProviderForService, getCategoryForId, getServiceNameForId } from '../utils/smm.mapper';
import { validateLinkForService, ServiceCategory } from '../services/instagram.validator';

const zapupiCheckCache = new Map<string, number>();

// Evict stale cache entries every 10 minutes to prevent memory leak
setInterval(() => {
    const now = Date.now();
    const TTL = 10 * 60 * 1000; // 10 minutes
    for (const [key, timestamp] of zapupiCheckCache.entries()) {
        if (now - timestamp > TTL) {
            zapupiCheckCache.delete(key);
        }
    }
    if (zapupiCheckCache.size > 0) {
        logger.debug(`[CacheCleanup] ZapUPI check cache cleared. Remaining: ${zapupiCheckCache.size}`);
    }
}, 10 * 60 * 1000).unref();

const PAYMENT_TIMEOUT_MS = env.PAYMENT_TIMEOUT_MINUTES * 60 * 1000;

async function expireStalePaymentsForOrder(orderId: string): Promise<void> {
    const payment = await prisma.payment.findUnique({
        where: { orderId },
        include: { order: true },
    });
    if (!payment || payment.status !== 'PENDING') return;

    const elapsed = Date.now() - new Date(payment.createdAt).getTime();
    if (elapsed < PAYMENT_TIMEOUT_MS) return;

    await prisma.payment.update({
        where: { id: payment.id },
        data: { status: 'EXPIRED', failureReason: 'Payment timeout exceeded' },
    });
    await prisma.order.update({
        where: { id: orderId },
        data: { status: 'FAILED' },
    });

    try {
        await rabbitMQService.publishToQueue(QUEUES.PAYMENT_FAILED, {
            orderId,
            paymentId: payment.id,
            amount: payment.amount,
            reason: 'Payment timed out',
            timestamp: new Date().toISOString(),
        });
    } catch (err) {
        logger.error('[OrderController] Failed to publish PAYMENT_FAILED for expired payment in order retrieval:', err);
    }
}

// ===================== Validation Schemas =====================

export const createOrderSchema = z.object({
    serviceId: z.number().int().positive('serviceId must be a positive integer'),
    link: z.string().optional().default(''),
    quantity: z.number().int().min(1, 'quantity must be at least 1'),
    amount: z.number().positive('amount must be positive'),
    serviceCategory: z.string().min(1),
    customerMobile: z.string().regex(/^[6-9]\d{9}$/, 'Invalid Indian mobile number').optional(),
    remark: z.string().max(200).optional(),
    userId: z.string().uuid().optional(),
    serviceName: z.string(),
});

export const validateLinkSchema = z.object({
    link: z.string().optional().default(''),
    serviceCategory: z.string().min(1),
});

// ===================== Controllers =====================

// ===================== Controllers =====================

/**
 * POST /api/orders/validate-link
 * Validates an Instagram link against the selected service category.
 */
export async function validateLink(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const { link, serviceCategory } = req.body as z.infer<typeof validateLinkSchema>;

        const result = validateLinkForService(link, serviceCategory as ServiceCategory);

        const response: ApiResponse = {
            success: result.valid,
            message: result.valid ? 'Link is valid for the selected service' : (result.error ?? 'Validation failed'),
            data: {
                linkType: result.linkType,
                valid: result.valid,
                allowedServices: result.allowedServices,
                platform: getPlatformNameFromUrl(link),
            },
        };

        res.status(result.valid ? 200 : 400).json(response);
    } catch (error) {
        next(error);
    }
}

/**
 * POST /api/orders
 * Creates a new SMM order and triggers the ZapUPI payment flow.
 */
export async function createOrder(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const body = req.body as z.infer<typeof createOrderSchema>;
        let { serviceId, link, quantity, amount, serviceCategory, customerMobile, remark, userId, serviceName } = body;

        // Derive meta-data from serviceId (Override or supplement frontend)
        const mappedCategory = getCategoryForId(serviceId);
        const mappedName = getServiceNameForId(serviceId);

        if (mappedCategory) {
            serviceCategory = mappedCategory;
        }

        const finalRemark = remark || (mappedName ? `${mappedName} - ${link}` : `${serviceCategory} - ${link}`);

        // Determine SMM provider based on serviceId
        const provider = getProviderForService(serviceId);

        // --- LINK VALIDATION (Moved to Post-Payment Worker) ---
        // We no longer block order creation here to avoid preventing users from paying.
        // The payment worker handles validation after success.
        /*
        const linkCheck = validateLinkForService(link, serviceCategory as ServiceCategory);
        if (!linkCheck.valid) {
            logger.warn(`[OrderController] Blocking order creation due to invalid link: ${linkCheck.error}`);
            res.status(400).json({
                success: false,
                message: linkCheck.error || 'Invalid link for the selected service',
                data: { linkType: linkCheck.linkType }
            });
            return;
        }
        */

        // Create Order in DB
        const order = await prisma.order.create({
            data: {
                serviceId,
                link,
                quantity,
                amount,
                provider, // Track which panel handles this service
                remark: finalRemark,
                userId: userId ?? null,
                status: OrderStatus.PENDING,
                serviceName
            },
        });

        logger.info(`[OrderController] Created order: ${order.id} (Provider: ${provider}, Category: ${serviceCategory})`);

        // Create ZapUPI payment (alphanumeric only, no hyphens)
        const zapupiOrderId = `SMM-${uuidv4().replace(/-/g, '').substring(0, 16).toUpperCase()}`;
        let paymentUrl: string | null = null;

        const redirectUrl = `${env.FRONTEND_URL}/payment/status?orderId=${order.id}`;

        const zapupiResponse = await zapUPIService.createOrder({
            amount,
            orderId: zapupiOrderId,
            customerMobile,
            redirectUrl,
            remark: `Instagram ${serviceCategory} - ${quantity} units`,
        });

        const isSuccess = zapupiResponse.status === true || zapupiResponse.status === 'true' || (typeof zapupiResponse.status === 'string' && zapupiResponse.status.toString().toLowerCase() === 'success') || (typeof zapupiResponse.status === 'string' && zapupiResponse.status.toString().toUpperCase() === 'COMPLETED');
        if (isSuccess && zapupiResponse.result?.payment_url) {
            paymentUrl = zapupiResponse.result.payment_url;

            await prisma.payment.create({
                data: {
                    zapupiOrderId,
                    orderId: order.id,
                    amount,
                    paymentUrl,
                    customerMobile: customerMobile ?? null,
                    status: PaymentStatus.PENDING,
                },
            });
        } else {
            logger.error(`[OrderController] ZapUPI payment creation failed for order ${order.id}:`, zapupiResponse);

            // Mark order as FAILED since payment couldn't be created
            await prisma.order.update({
                where: { id: order.id },
                data: { status: OrderStatus.FAILED },
            });

            const failResponse: ApiResponse = {
                success: false,
                message: 'Payment gateway error — please try again',
                data: { orderId: order.id },
            };
            res.status(502).json(failResponse);
            return;
        }

        const response: ApiResponse = {
            success: true,
            message: 'Order created successfully',
            data: {
                orderId: order.id,
                serviceId: order.serviceId,
                link: order.link,
                quantity: order.quantity,
                amount: order.amount,
                status: order.status,
                serviceCategory,
                paymentUrl,
                zapupiOrderId,
                createdAt: order.createdAt,
            },
        };

        res.status(201).json(response);
    } catch (error) {
        next(error);
    }
}

/**
 * GET /api/orders/:id
 * Get full order details with payment and SMM order status.
 * Auto-syncs payment status from ZapUPI when payment is still PENDING (rate-limited to 30s).
 */
export async function getOrder(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const id = String(req.params.id);

        const order = await prisma.order.findUnique({
            where: { id },
            include: { payment: true, smmOrder: true, user: true },
        });

        if (!order) {
            return next(createError('Order not found', 404));
        }

        // AUTO-SYNC: If payment is PENDING, check ZapUPI
        if (order.payment && order.payment.status === 'PENDING') {
            const timeoutMs = env.PAYMENT_TIMEOUT_MINUTES * 60 * 1000;
            const paymentAge = Date.now() - new Date(order.payment.createdAt).getTime();

            // 1. Check for Expiry FIRST (Always, no cache bottleneck)
            if (paymentAge > timeoutMs) {
                logger.info(`[OrderController] Payment expired (${Math.round(paymentAge / 1000)}s old) for order ${id}, auto-failing`);

                await prisma.payment.update({
                    where: { id: order.payment.id },
                    data: { status: 'FAILED', failureReason: `Payment expired (${env.PAYMENT_TIMEOUT_MINUTES} min timeout)` },
                });

                await prisma.order.update({
                    where: { id },
                    data: { status: 'FAILED' },
                });

                // Notify Bot via RabbitMQ
                try {
                    await rabbitMQService.publishToQueue(QUEUES.PAYMENT_FAILED, {
                        orderId: id,
                        paymentId: order.payment.id,
                        amount: order.payment.amount,
                        reason: `Payment expired (${env.PAYMENT_TIMEOUT_MINUTES} min timeout)`,
                        customerMobile: order.payment.customerMobile || undefined,
                        timestamp: new Date().toISOString(),
                    });
                    logger.info(`[OrderController] Published PAYMENT_FAILED for expired order ${id}`);
                } catch (mqErr) {
                    logger.error('[OrderController] RabbitMQ publish failed for expired order:', mqErr);
                }

                const updated = await prisma.order.findUnique({
                    where: { id },
                    include: { payment: true, smmOrder: true, user: true },
                });
                res.json({ success: true, message: 'Payment expired', data: updated });
                return;
            }

            // 2. Poll ZapUPI for Live Status (Rate-limited to 30s)
            const cacheKey = `zapupi-check-${id}`;
            const lastCheck = zapupiCheckCache.get(cacheKey);
            const now = Date.now();
            const shouldCheck = !lastCheck || (now - lastCheck) > 30000;

            if (shouldCheck) {
                zapupiCheckCache.set(cacheKey, now);
                try {
                    const liveStatus = await zapUPIService.getOrderStatus(order.payment.zapupiOrderId);

                    if (liveStatus?.status === 'COMPLETED' && liveStatus.result) {
                        const normalizedStatus = liveStatus.result.status?.toLowerCase();

                        if (normalizedStatus === 'success' || normalizedStatus === 'completed') {
                            logger.info(`[OrderController] Auto-syncing payment to SUCCESS for order ${id}`);

                            try {
                                // 1. Update Payment status to SUCCESS (ensure it was PENDING)
                                await prisma.payment.update({
                                    where: {
                                        id: order.payment.id,
                                        status: 'PENDING' // ATOMIC PROTECTION
                                    },
                                    data: {
                                        status: 'SUCCESS',
                                        utr: liveStatus.result.utr || null,
                                        zapupiTxnId: liveStatus.result.orderId || null,
                                    },
                                });

                                // // 2. Update Order status to PROCESSING
                                // await prisma.order.update({
                                //     where: { 
                                //         id,
                                //         status: 'PENDING'
                                //     },
                                //     data: { status: OrderStatus.PROCESSING },
                                // });

                                try {
                                    await rabbitMQService.publishToQueue(QUEUES.PAYMENT_SUCCESS, {
                                        orderId: id,
                                        paymentId: order.payment.id,
                                        serviceId: order.serviceId,
                                        link: order.link,
                                        quantity: order.quantity,
                                        amount: order.payment.amount,
                                        utr: liveStatus.result.utr || null,
                                        timestamp: new Date().toISOString(),
                                    });
                                    logger.info(`[OrderController] Published PAYMENT_SUCCESS for order ${id}`);
                                } catch (mqErr) {
                                    logger.error('[OrderController] RabbitMQ publish failed:', mqErr);
                                }
                            } catch (updateErr: any) {
                                // If status is already changed, another request won the race — ignore silently
                                if (updateErr.code === 'P2025') {
                                    logger.warn(`[OrderController] Duplicate sync attempt blocked for order ${id}`);
                                    const updated = await prisma.order.findUnique({
                                        where: { id },
                                        include: { payment: true, smmOrder: true, user: true },
                                    });
                                    res.json({ success: true, message: 'Order retrieved (already synced)', data: updated });
                                    return;
                                }
                                throw updateErr;
                            }

                            // zapupiCheckCache.delete(cacheKey); // REMOVED: Keep lock for 30s to prevent multiple in-flight polls from triggering again

                            const updated = await prisma.order.findUnique({
                                where: { id },
                                include: { payment: true, smmOrder: true, user: true },
                            });
                            res.json({ success: true, message: 'Order retrieved (payment synced)', data: updated });
                            return;

                        } else if (normalizedStatus === 'failed' || normalizedStatus === 'error') {
                            logger.info(`[OrderController] Auto-syncing payment to FAILED for order ${id}`);

                            await prisma.payment.update({
                                where: { id: order.payment.id },
                                data: { status: 'FAILED', failureReason: 'Payment failed on ZapUPI' },
                            });

                            await prisma.order.update({
                                where: { id },
                                data: { status: 'FAILED' },
                            });

                            zapupiCheckCache.delete(cacheKey);

                            const updated = await prisma.order.findUnique({
                                where: { id },
                                include: { payment: true, smmOrder: true, user: true },
                            });
                            res.json({ success: true, message: 'Order retrieved (payment failed)', data: updated });
                            return;
                        }
                    }
                } catch (syncErr) {
                    logger.warn(`[OrderController] ZapUPI status check failed for order ${id}:`, syncErr);
                }
            }
        }

        // Default: return order as-is
        res.json({ success: true, message: 'Order retrieved', data: order });
    } catch (error) {
        next(error);
    }
}

/**
 * GET /api/orders
 * Get all orders (admin), with pagination.
 */
export async function getOrders(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const page = parseInt(String(req.query.page ?? '1'), 10);
        const limit = Math.min(parseInt(String(req.query.limit ?? '20'), 10), 100);
        const skip = (page - 1) * limit;
        const statusQuery = req.query.status as string | undefined;
        const status = statusQuery as OrderStatus | undefined;

        const [orders, total] = await Promise.all([
            prisma.order.findMany({
                where: status ? { status } : undefined,
                include: { payment: true, smmOrder: true },
                orderBy: { createdAt: 'desc' },
                skip,
                take: limit,
            }),
            prisma.order.count({ where: status ? { status } : undefined }),
        ]);

        const response: ApiResponse = {
            success: true,
            message: 'Orders retrieved',
            data: {
                orders,
                pagination: {
                    total,
                    page,
                    limit,
                    totalPages: Math.ceil(total / limit),
                },
            },
        };

        res.json(response);
    } catch (error) {
        next(error);
    }
}
