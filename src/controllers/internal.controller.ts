import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { prisma } from '../../lib/initiatePrisma';
import { logger } from '../utils/logger';
import { ApiResponse } from '../types';
import { OrderStatus, PaymentStatus } from '../../generated/prisma/index';
import { rabbitMQService, QUEUES } from '../services/rabbitmq.service';
import { getProviderForService, getCategoryForId, getServiceNameForId } from '../utils/smm.mapper';
import { sseService } from '../services/sse.service';
import { telegramService } from '../services/telegram.service';

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
 * POST /api/internal/auth/login
 */
const loginSchema = z.object({
    email: z.string().email(),
});

export async function login(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const { email } = loginSchema.parse(req.body);
        const admin = await prisma.adminEmail.findUnique({
            where: { email: email.toLowerCase() },
        });

        if (!admin) {
            res.status(401).json({ success: false, message: 'Access denied' });
            return;
        }

        res.json({ success: true, message: 'Login successful', data: { email: admin.email, id: admin.id } });
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
