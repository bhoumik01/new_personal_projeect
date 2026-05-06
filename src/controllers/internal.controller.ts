import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { prisma } from '../../lib/initiatePrisma';
import { logger } from '../utils/logger';
import { ApiResponse } from '../types';
import { OrderStatus, PaymentStatus, AdminRole } from '../../generated/prisma/index';
import bcrypt from 'bcrypt';
import { rabbitMQService, QUEUES } from '../services/rabbitmq.service';
import { getProviderForService, getCategoryForId, getServiceNameForId } from '../utils/smm.mapper';
import { sseService } from '../services/sse.service';
import { telegramService } from '../services/telegram.service';
import fs from 'fs';
import path from 'path';

/**
 * GET /api/internal/reports/collection
 * Aggregates revenue, bot orders, and SMM spend for a date range.
 */
export async function getCollectionReport(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const range = (req.query.range as string) || 'today';

        // Calculate date range in IST (consistent with the bot logic)
        const now = new Date();
        const istOffset = 5.5 * 60 * 60 * 1000;
        const istNow = new Date(now.getTime() + istOffset);

        let startDate: Date;
        let endDate: Date;

        if (range === 'today') {
            const istMidnight = new Date(istNow);
            istMidnight.setUTCHours(0, 0, 0, 0);
            startDate = new Date(istMidnight.getTime() - istOffset);
            endDate = now;
        } else if (range === 'yesterday') {
            const istYesterday = new Date(istNow);
            istYesterday.setUTCDate(istYesterday.getUTCDate() - 1);
            const istYesterdayMidnight = new Date(istYesterday);
            istYesterdayMidnight.setUTCHours(0, 0, 0, 0);
            startDate = new Date(istYesterdayMidnight.getTime() - istOffset);

            const istTodayMidnight = new Date(istNow);
            istTodayMidnight.setUTCHours(0, 0, 0, 0);
            endDate = new Date(istTodayMidnight.getTime() - istOffset);
        } else {
            res.status(400).json({ success: false, message: 'Invalid range' });
            return;
        }

        // Fetch orders with successful payments
        const ordersWithPayments = await prisma.order.findMany({
            where: {
                createdAt: { gte: startDate, lt: endDate },
                payment: { OR: [{ status: PaymentStatus.SUCCESS }] },
            },
            include: { payment: true, smmOrder: true },
        });

        // Fetch bot orders (no payment, but processing/completed)
        const botOrders = await prisma.order.findMany({
            where: {
                createdAt: { gte: startDate, lt: endDate },
                payment: { amount: 0 },
                status: { in: [OrderStatus.PROCESSING, OrderStatus.COMPLETED, OrderStatus.PENDING] },
            },

        });
        const spent = await prisma.spend.aggregate({
            where: {
                date: { gte: startDate, lt: endDate }
            },
            _sum: {
                amount: true
            }
        })
        const websiteRevenue = ordersWithPayments.reduce((sum, o) => sum + (o.payment?.amount ?? 0), 0);
        const totalSpend = spent._sum.amount ?? 0;
        const netProfit = websiteRevenue - totalSpend;

        const response: ApiResponse = {
            success: true,
            message: 'Report generated successfully',
            data: {
                range,
                startDate,
                endDate,
                websiteOrdersCount: ordersWithPayments.length,
                websiteRevenue,
                botOrdersCount: botOrders.length,
                totalSpend,
                netProfit,
            },
        };

        res.json(response);
    } catch (error) {
        logger.error('[InternalController] Error generating report:', error);
        next(error);
    }
}

/**
 * POST /api/internal/orders/bot
 * Places an order directly from the bot (free).
 */
const botOrderSchema = z.object({
    serviceId: z.number().int().positive(),
    link: z.string(),
    quantity: z.number().int().positive(),
    remark: z.string().optional(),
});

export async function createBotOrder(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const { serviceId, link, quantity, remark } = botOrderSchema.parse(req.body);

        const provider = getProviderForService(serviceId);
        const serviceName = `${getServiceNameForId(serviceId)}-instagram`;
        const finalRemark = remark || (serviceName ? `${serviceName} - ${link}` : `Bot Order - ${link}`);

        const order = await prisma.order.create({
            data: {
                serviceId,
                serviceName,
                link,
                quantity,
                amount: 0,
                provider,
                remark: finalRemark,
                status: OrderStatus.PENDING,
                payment: {
                    create: {
                        zapupiOrderId: `TELE_BOT-${Date.now()}`,
                        amount: 0,
                        status: PaymentStatus.PENDING,
                        customerMobile: 'ADMIN',
                        utr: 'MANUAL-Telegram bot',
                    },
                },
            },
        });

        // Trigger SMM placement worker via RabbitMQ
        await rabbitMQService.publishToQueue(QUEUES.PAYMENT_SUCCESS, {
            orderId: order.id,
            serviceId,
            link,
            quantity,
            amount: 0,
            utr: 'BOT_ORDER',
            timestamp: new Date().toISOString(),
        });

        logger.info(`[InternalController] Created bot order: ${order.id}`);

        res.status(201).json({
            success: true,
            message: 'Bot order created and queued for SMM',
            data: { orderId: order.id },
        });
    } catch (error) {
        logger.error('[InternalController] Error creating bot order:', error);
        next(error);
    }
}

/**
 * GET /api/internal/groups
 * List authorized groups.
 */
export async function getAuthorizedGroups(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const groups = await prisma.approvedGroup.findMany({
            orderBy: { createdAt: 'desc' },
        });

        res.json({
            success: true,
            message: 'Authorized groups retrieved',
            data: groups,
        });
    } catch (error) {
        next(error);
    }
}

/**
 * POST /api/internal/groups
 * Authorize/Update a group.
 */
const authorizeGroupSchema = z.object({
    chatId: z.string(),
    title: z.string().optional(),
});

export async function authorizeGroup(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const { chatId, title } = authorizeGroupSchema.parse(req.body);

        const group = await prisma.approvedGroup.upsert({
            where: { chatId },
            create: { chatId, title },
            update: { title },
        });

        res.json({
            success: true,
            message: 'Group authorized successfully',
            data: group,
        });
    } catch (error) {
        next(error);
    }
}

/**
 * DELETE /api/internal/groups/:chatId
 * De-authorize a group.
 */
export async function removeGroup(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const chatId = String(req.params.chatId);

        await prisma.approvedGroup.delete({
            where: { chatId },
        });

        res.json({
            success: true,
            message: 'Group removed successfully',
        });
    } catch (error) {
        next(error);
    }
}

/**
 * GET /api/internal/stats
 * Dashboard overview: total orders, revenue, active APIs count, recent orders.
 */
export async function getDashboardStats(_req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const [totalOrders, recentOrders, recentPayments, revenueResult] = await Promise.all([
            prisma.order.count(),
            prisma.order.findMany({
                orderBy: { createdAt: 'desc' },
                take: 10,
                include: { payment: true, smmOrder: true },
            }),
            prisma.payment.findMany({
                where: { status: 'SUCCESS' },
                orderBy: { updatedAt: 'desc' },
                take: 20,
                include: { order: true },
            }),
            prisma.payment.aggregate({
                where: { status: 'SUCCESS' },
                _sum: { amount: true },
            }),
        ]);

        const totalRevenue = revenueResult._sum.amount ?? 0;

        res.json({
            success: true,
            message: 'Internal dashboard stats retrieved',
            data: {
                totalOrders,
                totalRevenue,
                activeApis: 2,
                telegramBots: 1,
                recentOrders,
                recentPayments,
            },
        });
    } catch (error) {
        next(error);
    }
}

/**
 * GET /api/internal/orders
 * List orders with pagination (Admin).
 */
export async function getOrders(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const page = parseInt(String(req.query.page ?? '1'), 10);
        const limit = Math.min(parseInt(String(req.query.limit ?? '20'), 10), 100);
        const skip = (page - 1) * limit;
        const status = req.query.status as OrderStatus | undefined;

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

        res.json({
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
        });
    } catch (error) {
        next(error);
    }
}

/**
 * GET /api/internal/orders/:id
 * Get single order detail.
 */
export async function getOrder(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const id = String(req.params.id);
        const order = await prisma.order.findUnique({
            where: { id },
            include: { payment: true, smmOrder: true, user: true },
        });

        if (!order) {
            res.status(404).json({ success: false, message: 'Order not found' });
            return;
        }

        res.json({ success: true, message: 'Order retrieved', data: order });
    } catch (error) {
        next(error);
    }
}

/**
 * POST /api/internal/orders (Admin Manual Create)
 */
export async function createAdminOrder(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const { serviceId, link, quantity, amount, remark, customerMobile } = req.body;

        const provider = getProviderForService(serviceId);
        const serviceName = `${getServiceNameForId(serviceId)}-instagram`;
        // Append -instagram to differentiate in reports, this ensures that every admin orders goes through smm call

        const order = await prisma.order.create({
            data: {
                serviceId,
                serviceName,
                link,
                quantity,
                amount,
                provider,
                remark: remark || `Admin Manual: ${serviceName || serviceId}`,
                status: OrderStatus.PENDING,
                payment: {
                    create: {
                        zapupiOrderId: `ADMIN-${Date.now()}`,
                        amount,
                        status: PaymentStatus.PENDING,
                        customerMobile: customerMobile || 'ADMIN',
                        utr: 'MANUAL',
                    },
                },
            },
        });

        // Trigger SMM placement
        await rabbitMQService.publishToQueue(QUEUES.PAYMENT_SUCCESS, {
            orderId: order.id,
            serviceId,
            link,
            quantity,
            amount,
            utr: 'MANUAL',
            timestamp: new Date().toISOString(),
        });

        res.status(201).json({ success: true, message: 'Admin order created', data: order });
    } catch (error) {
        next(error);
    }
}

/**
 * GET /api/internal/spends
 */
export async function getSpends(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const date = req.query.date as string | undefined;
        const where = date ? {
            date: {
                equals: new Date(date)
            }
        } : undefined;


        const spends = await prisma.spend.findMany({
            where,
            orderBy: { date: 'desc' },
            take: 50,
        });
        res.json({ success: true, message: 'Spends retrieved', data: spends });
    } catch (error) {
        next(error);
    }
}

/**
 * POST /api/internal/spends
 */
export async function createSpend(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const { category, amount, note, date } = req.body;

        const now = new Date();
        let spendDate = new Date();
        logger.info("Date if given", date)
        if (date) {
            const inputDate = new Date(date);
            // Use the date part from the input, but the time part from 'now'
            spendDate = new Date(inputDate);
            spendDate.setHours(now.getHours(), now.getMinutes(), now.getSeconds(), now.getMilliseconds());
            logger.info("inside info", spendDate);
        }
        logger.info("outside info", spendDate);
        const spend = await prisma.spend.create({
            data: {
                category,
                amount,
                note,
                date: spendDate,
            },
        });
        logger.info("Spend", JSON.stringify(spend))
        res.status(201).json({ success: true, message: 'Spend recorded', data: spend });
    } catch (error) {
        next(error);
    }
}

/**
 * DELETE /api/internal/spends/:id
 */
export async function deleteSpend(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const id = String(req.params.id);
        await prisma.spend.delete({
            where: { id },
        });

        res.json({
            success: true,
            message: 'Spend record deleted successfully',
        });
    } catch (error) {
        logger.error('[InternalController] Error deleting spend:', error);
        next(error);
    }
}

/**
 * Offer Management (Internal API)
 */
const createOfferSchema = z.object({
    serviceSlug: z.string().min(1),
    title: z.string().min(1),
    badge: z.string().default('LIVE'),
    active: z.boolean().default(true),
    description: z.string().optional(),
    serviceId: z.number().int().positive().optional(),
    quantity: z.number().int().positive().optional(),
    price: z.number().positive().optional(),
}).strict();

const updateOfferSchema = createOfferSchema.partial();

export async function getOffersInternal(_req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const offers = await prisma.specialOffer.findMany({
            orderBy: { createdAt: 'desc' },
        });

        res.json({
            success: true,
            message: 'Offers retrieved',
            data: offers,
        });
    } catch (error) {
        next(error);
    }
}

export async function createOfferInternal(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const data = createOfferSchema.parse(req.body);

        // If activating a new offer, deactivate the old one for this service
        if (data.active) {
            await prisma.specialOffer.updateMany({
                where: { serviceSlug: data.serviceSlug, active: true },
                data: { active: false },
            });
        }

        const offer = await prisma.specialOffer.create({
            data: {
                serviceSlug: data.serviceSlug,
                title: data.title,
                badge: data.badge,
                active: data.active,
                description: data.description,
                serviceId: data.serviceId,
                quantity: data.quantity,
                price: data.price,
            }
        });

        logger.info(`[InternalController] Created offer: ${offer.id}`);

        res.status(201).json({
            success: true,
            message: 'Offer created',
            data: offer,
        });
    } catch (error) {
        next(error);
    }
}

export async function updateOfferInternal(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const id = String(req.params.id);
        const data = updateOfferSchema.parse(req.body);

        // If activating this offer, deactivate others for same service
        if (data.active) {
            const currentOffer = await prisma.specialOffer.findUnique({ where: { id } });
            const slug = data.serviceSlug || currentOffer?.serviceSlug;
            if (slug) {
                await prisma.specialOffer.updateMany({
                    where: { serviceSlug: slug, active: true, id: { not: id } },
                    data: { active: false },
                });
            }
        }

        const offer = await prisma.specialOffer.update({
            where: { id },
            data,
        });

        logger.info(`[InternalController] Updated offer: ${id}`);

        res.json({
            success: true,
            message: 'Offer updated',
            data: offer,
        });
    } catch (error) {
        next(error);
    }
}

export async function deleteOfferInternal(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const id = String(req.params.id);

        await prisma.specialOffer.delete({
            where: { id },
        });

        logger.info(`[InternalController] Deleted offer: ${id}`);

        res.json({
            success: true,
            message: 'Offer deleted',
        });
    } catch (error) {
        next(error);
    }
}

/**
 * POST /api/internal/auth/login
 */
const loginSchema = z.object({
    email: z.string().email(),
    password: z.string(),
});

export async function login(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const { email, password } = loginSchema.parse(req.body);
        const admin = await prisma.adminAccount.findUnique({
            where: { email: email.toLowerCase() },
        });

        if (!admin) {
            res.status(401).json({ success: false, message: 'Access denied' });
            return;
        }

        const isMatch = await bcrypt.compare(password, admin.passwordHash);
        if (!isMatch) {
            res.status(401).json({ success: false, message: 'Invalid credentials' });
            return;
        }

        res.json({
            success: true,
            message: 'Login successful',
            data: {
                email: admin.email,
                id: admin.id,
                role: admin.role,
                name: admin.name
            }
        });
    } catch (error) {
        next(error);
    }
}

/**
 * POST /api/internal/auth/reset-password
 */
export async function resetPassword(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const { adminId, newPassword } = req.body;

        const salt = await bcrypt.genSalt(10);
        const passwordHash = await bcrypt.hash(newPassword, salt);

        await prisma.adminAccount.update({
            where: { id: adminId },
            data: { passwordHash },
        });

        res.json({ success: true, message: 'Password reset successful' });
    } catch (error) {
        next(error);
    }
}

/**
 * GET /api/internal/admins
 */
export async function getAdmins(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const admins = await prisma.adminAccount.findMany({
            where: { isVisible: true },
            orderBy: { createdAt: 'desc' }
        });
        res.json({ success: true, data: admins });
    } catch (error) {
        next(error);
    }
}

/**
 * POST /api/internal/admins
 */
export async function createAdmin(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const { email, password, role, name } = req.body;
        const salt = await bcrypt.genSalt(10);
        const passwordHash = await bcrypt.hash(password, salt);

        const admin = await prisma.adminAccount.create({
            data: {
                email: email.toLowerCase(),
                passwordHash,
                role: role as AdminRole,
                name,
            },
        });

        res.status(201).json({ success: true, data: admin });
    } catch (error) {
        next(error);
    }
}

/**
 * PATCH /api/internal/admins/:id
 */
export async function updateAdmin(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const id = req.params.id as string;
        const { email, role, name } = req.body;

        const admin = await prisma.adminAccount.update({
            where: { id },
            data: {
                email: email?.toLowerCase(),
                role: role as AdminRole,
                name,
            },
        });

        res.json({ success: true, data: admin });
    } catch (error) {
        next(error);
    }
}

/**
 * DELETE /api/internal/admins/:id
 */
export async function deleteAdmin(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const id = req.params.id as string;
        await prisma.adminAccount.delete({ where: { id } });
        res.json({ success: true });
    } catch (error) {
        next(error);
    }
}

/**
 * GET /api/internal/failed-orders/message/:messageId
 */
export async function getFailedOrderMessage(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const messageId = parseFloat(String(req.params.messageId));
        const mapping = await prisma.failedOrderMessage.findUnique({ where: { messageId } });
        res.json({ success: !!mapping, data: mapping });
    } catch (error) {
        next(error);
    }
}

/**
 * POST /api/internal/failed-orders/message
 */
export async function upsertFailedOrderMessage(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const { messageId, orderId } = req.body;
        const mapping = await prisma.failedOrderMessage.upsert({
            where: { messageId: parseFloat(messageId) },
            create: { messageId: parseFloat(messageId), orderId },
            update: { orderId },
        });
        res.json({ success: true, data: mapping });
    } catch (error) {
        next(error);
    }
}

/**
 * DELETE /api/internal/failed-orders/message/:messageId
 */
export async function removeFailedOrderMessage(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const messageId = parseFloat(String(req.params.messageId));
        await prisma.failedOrderMessage.delete({ where: { messageId } });
        res.json({ success: true });
    } catch (error) {
        next(error);
    }
}

/**
 * POST /api/internal/orders/:id/approve-manual
 */
export async function approveOrderManual(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const id = String(req.params.id);
        const order = await prisma.order.findUnique({
            where: { id },
            include: { smmOrder: true }
        });

        if (!order) {
            res.status(404).json({ success: false, message: 'Order not found' });
            return;
        }

        // 1. Mark the main order as COMPLETED
        await prisma.order.update({
            where: { id },
            data: { status: OrderStatus.COMPLETED },
        });

        // 2. Upsert SmmOrder record to indicate manual success
        if (order.smmOrder) {
            await prisma.smmOrder.update({
                where: { id: order.smmOrder.id },
                data: {
                    smmOrderId: order.smmOrder.smmOrderId || 'MANUAL',
                    status: OrderStatus.COMPLETED,
                    errorMsg: 'Manually marked success via Bot',
                    updatedAt: new Date(),
                },
            });
        } else {
            await prisma.smmOrder.create({
                data: {
                    orderId: id,
                    smmOrderId: 'MANUAL',
                    serviceId: order.serviceId,
                    link: order.link,
                    quantity: order.quantity,
                    provider: order.provider,
                    status: OrderStatus.COMPLETED,
                    errorMsg: 'Manually marked success via Bot',
                },
            });
        }

        // 3. Broadcast status to UI
        sseService.broadcastStatus(id, OrderStatus.COMPLETED);

        // 4. Notify admin via Telegram (Centralized)
        await telegramService.notifyOrderSuccess({
            orderId: id,
            serviceId: order.serviceId,
            serviceName: order.serviceName ?? undefined,
            link: order.link,
            quantity: order.quantity,
            amount: order.amount,
            utr: 'MANUAL_APPROVAL',
            apiStatus: 'Manually Approved',
        });

        res.json({ success: true, message: 'Order manually marked as COMPLETED' });
    } catch (error) {
        next(error);
    }
}

/**
 * Banner Management (Internal API)
 */
const bannerSchema = z.object({
    imageUrl: z.string().url(),
    active: z.boolean().default(true),
});

const updateBannerSchema = bannerSchema.partial();

/**
 * GET /api/internal/banners
 * Fetch all banners.
 */
export async function getBannersInternal(_req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const banners = await prisma.banner.findMany({
            orderBy: { createdAt: 'desc' },
        });

        res.json({
            success: true,
            message: 'Banners retrieved',
            data: banners,
        });
    } catch (error) {
        next(error);
    }
}

/**
 * POST /api/internal/banners
 * Add a new banner.
 */
export async function createBannerInternal(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        bannerSchema.parse(req.body);
        const data = req.body;
        const banner = await prisma.banner.create({ data });

        logger.info(`[InternalController] Created banner: ${banner.id}`);

        res.status(201).json({
            success: true,
            message: 'Banner created successfully',
            data: banner,
        });
    } catch (error) {
        next(error);
    }
}

/**
 * PATCH /api/internal/banners/:id
 * Update an existing banner.
 */
export async function updateBannerInternal(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const id = String(req.params.id);
        const data = updateBannerSchema.parse(req.body);

        const banner = await prisma.banner.update({
            where: { id },
            data,
        });

        logger.info(`[InternalController] Updated banner: ${banner.id}`);

        res.json({
            success: true,
            message: 'Banner updated successfully',
            data: banner,
        });
    } catch (error) {
        next(error);
    }
}

/**
 * DELETE /api/internal/banners/:id
 * Remove a banner.
 */
export async function deleteBannerInternal(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const id = String(req.params.id);

        await prisma.banner.delete({
            where: { id },
        });

        logger.info(`[InternalController] Deleted banner: ${id}`);

        res.json({
            success: true,
            message: 'Banner deleted successfully',
        });
    } catch (error) {
        next(error);
    }
}
/**
 * SMM Config Management
 */
export async function getSmmConfigs(_req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const configs = await prisma.smmConfig.findMany({
            orderBy: { createdAt: 'desc' }
        });
        res.json({ success: true, data: configs });
    } catch (error) {
        next(error);
    }
}

export async function createSmmConfig(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const { name, type, url, apiKey, isActive } = req.body;
        const config = await prisma.smmConfig.create({
            data: { name, type, url, apiKey, isActive: isActive ?? true }
        });
        res.status(201).json({ success: true, data: config });
    } catch (error) {
        next(error);
    }
}

export async function updateSmmConfig(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const id = String(req.params.id);
        const { name, type, url, apiKey, isActive } = req.body;
        const config = await prisma.smmConfig.update({
            where: { id },
            data: { name, type, url, apiKey, isActive }
        });
        res.json({ success: true, data: config });
    } catch (error) {
        next(error);
    }
}

export async function deleteSmmConfig(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const id = String(req.params.id);
        await prisma.smmConfig.delete({ where: { id } });
        res.json({ success: true, message: 'SMM config deleted' });
    } catch (error) {
        next(error);
    }
}

// ─────────────────────────────────────────────────────────────────────────────
// Service IDs JSON CRUD
// File: /data/service-ids.json
// ─────────────────────────────────────────────────────────────────────────────

const SERVICE_IDS_FILE = path.resolve(process.cwd(), 'data/service-ids.json');

interface ServiceIdEntry {
    id: number;
    name: string;
    provider: string;
    category: string;
    platform: string;
    allowedQuantities: number[];
    description?: string;
    linkTypes?: string[];
}

interface ServiceIdsFile {
    serviceIds: ServiceIdEntry[];
    updatedAt: string;
}

function readServiceIdsFile(): ServiceIdsFile {
    const raw = fs.readFileSync(SERVICE_IDS_FILE, 'utf-8');
    return JSON.parse(raw) as ServiceIdsFile;
}

function writeServiceIdsFile(data: ServiceIdsFile): void {
    data.updatedAt = new Date().toISOString();
    fs.writeFileSync(SERVICE_IDS_FILE, JSON.stringify(data, null, 2), 'utf-8');
}

const serviceIdEntrySchema = z.object({
    id: z.number().int().positive(),
    name: z.string().min(1),
    provider: z.string().min(1),
    category: z.string().min(1),
    platform: z.string().min(1),
    allowedQuantities: z.array(z.number().int().positive()).min(1),
    description: z.string().optional(),
    linkTypes: z.array(z.string()).optional(),
});

/**
 * GET /api/internal/service-ids
 * Returns the full list of tracked service IDs from the JSON file.
 */
export async function getServiceIds(_req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const data = readServiceIdsFile();
        res.json({
            success: true,
            message: 'Service IDs retrieved',
            data: data.serviceIds,
            updatedAt: data.updatedAt,
        });
    } catch (error) {
        logger.error('[InternalController] Error reading service-ids.json:', error);
        next(error);
    }
}

/**
 * GET /api/service-ids/map
 * Returns a simple mapping of category -> id (e.g. { "followers": 10183, "likes": 12587 })
 * used by SocialBoost frontend for quick lookups.
 */
export async function getServiceIdMap(_req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const data = readServiceIdsFile();
        const map: Record<string, number> = {};

        // Build category → id map
        // 1. First pass: platform-scoped keys (e.g. "instagram_followers", "youtube_views")
        for (const entry of data.serviceIds) {
            map[`${entry.platform}_${entry.category}`] = entry.id;
        }

        // 2. Second pass: primary keys (unscoped) for Instagram (the main platform)
        for (const entry of data.serviceIds) {
            if (entry.platform === 'instagram') {
                map[entry.category] = entry.id;
            }
        }

        res.json({
            success: true,
            message: 'Service ID map built',
            data: map,
        });
    } catch (error) {
        logger.error('[InternalController] Error building service-id map:', error);
        next(error);
    }
}

/**
 * POST /api/internal/service-ids
 * Add a new service ID entry to the JSON file.
 */
export async function createServiceId(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const entry = serviceIdEntrySchema.parse(req.body);
        const data = readServiceIdsFile();

        const exists = data.serviceIds.some((s) => s.id === entry.id);
        if (exists) {
            res.status(409).json({ success: false, message: `Service ID ${entry.id} already exists` });
            return;
        }

        data.serviceIds.push(entry as ServiceIdEntry);
        writeServiceIdsFile(data);

        logger.info(`[InternalController] Added service ID: ${entry.id}`);
        res.status(201).json({ success: true, message: 'Service ID added', data: entry });
    } catch (error) {
        logger.error('[InternalController] Error creating service ID:', error);
        next(error);
    }
}

/**
 * PATCH /api/internal/service-ids/:id
 * Update an existing service ID entry by numeric ID.
 */
export async function updateServiceId(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const numericId = parseInt(String(req.params.id), 10);
        if (isNaN(numericId)) {
            res.status(400).json({ success: false, message: 'Invalid service ID' });
            return;
        }

        const updates = serviceIdEntrySchema.partial().parse(req.body);
        const data = readServiceIdsFile();

        const index = data.serviceIds.findIndex((s) => s.id === numericId);
        if (index === -1) {
            res.status(404).json({ success: false, message: `Service ID ${numericId} not found` });
            return;
        }

        data.serviceIds[index] = { ...data.serviceIds[index], ...updates };
        writeServiceIdsFile(data);

        logger.info(`[InternalController] Updated service ID: ${numericId}`);
        res.json({ success: true, message: 'Service ID updated', data: data.serviceIds[index] });
    } catch (error) {
        logger.error('[InternalController] Error updating service ID:', error);
        next(error);
    }
}

/**
 * DELETE /api/internal/service-ids/:id
 * Remove a service ID entry by numeric ID.
 */
export async function deleteServiceId(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const numericId = parseInt(String(req.params.id), 10);
        if (isNaN(numericId)) {
            res.status(400).json({ success: false, message: 'Invalid service ID' });
            return;
        }

        const data = readServiceIdsFile();
        const before = data.serviceIds.length;
        data.serviceIds = data.serviceIds.filter((s) => s.id !== numericId);

        if (data.serviceIds.length === before) {
            res.status(404).json({ success: false, message: `Service ID ${numericId} not found` });
            return;
        }

        writeServiceIdsFile(data);

        logger.info(`[InternalController] Deleted service ID: ${numericId}`);
        res.json({ success: true, message: `Service ID ${numericId} deleted` });
    } catch (error) {
        logger.error('[InternalController] Error deleting service ID:', error);
        next(error);
    }
}

