import { prisma } from '../../lib/initiatePrisma';
import { logger } from '../utils/logger';

/**
 * Shared logic for bot commands and report generation.
 */
export class BotService {
    /**
     * Get real-time balance for all connected panels.
     */
    

    /**
     * Generate collection report for today or yesterday.
     */
    async getCollectionReport(dateType: 'today' | 'yesterday'): Promise<string> {
        const now = new Date();
        const istOffset = 5.5 * 60 * 60 * 1000;
        const istNow = new Date(now.getTime() + istOffset);

        let startDate: Date;
        let endDate: Date;
        let dateLabel: string;

        if (dateType === 'today') {
            const istMidnight = new Date(istNow);
            istMidnight.setUTCHours(0, 0, 0, 0);
            startDate = new Date(istMidnight.getTime() - istOffset);
            endDate = now;
            dateLabel = istNow.toLocaleDateString('en-IN', {
                day: '2-digit',
                month: 'long',
                year: 'numeric',
                timeZone: 'Asia/Kolkata',
            });
        } else {
            const istYesterday = new Date(istNow);
            istYesterday.setUTCDate(istYesterday.getUTCDate() - 1);
            const istYesterdayMidnight = new Date(istYesterday);
            istYesterdayMidnight.setUTCHours(0, 0, 0, 0);
            startDate = new Date(istYesterdayMidnight.getTime() - istOffset);

            const istTodayMidnight = new Date(istNow);
            istTodayMidnight.setUTCHours(0, 0, 0, 0);
            endDate = new Date(istTodayMidnight.getTime() - istOffset);

            dateLabel = istYesterday.toLocaleDateString('en-IN', {
                day: '2-digit',
                month: 'long',
                year: 'numeric',
                timeZone: 'Asia/Kolkata',
            });
        }

        // Fetch successful orders (website orders)
        const websiteOrders = await prisma.order.findMany({
            where: {
                createdAt: { gte: startDate, lt: endDate },
                payment: { status: 'SUCCESS' },
            },
            include: { smmOrder: true, payment: true },
        });

        // Fetch bot orders (no payment, processing/completed)
        const botOrders = await prisma.order.findMany({
            where: {
                createdAt: { gte: startDate, lt: endDate },
                payment: null,
                status: { in: ['PROCESSING', 'COMPLETED'] },
            },
            include: { smmOrder: true },
        });

        // Group by provider for "Website Name" summary
        const supportSmmGroup = websiteOrders.filter(o => o.provider === 'SUPPORTIVE');
        const indSmmGroup = websiteOrders.filter(o => o.provider === 'IND');

        const supportTotal = supportSmmGroup.reduce((sum, o) => sum + (o.payment?.amount ?? 0), 0);
        const indTotal = indSmmGroup.reduce((sum, o) => sum + (o.payment?.amount ?? 0), 0);

        // Total spending from SMM Panel (charge field)
        const allOrders = [...websiteOrders, ...botOrders];
        const totalSpend = allOrders.reduce((sum, o) => sum + (o.smmOrder?.charge ?? 0), 0);

        const websiteCollection = supportTotal + indTotal;
        const netProfit = websiteCollection - totalSpend;

        const title = dateType === 'today' ? 'TODAY' : 'YESTERDAY';

        return (
            `${title} COLLECTION REPORT\n` +
            `📅 Date: ${dateLabel}\n\n` +
            `━━━━━━━━━━━━━━\n` +
            `💵 COLLECTION SUMMARY\n\n` +
            `Supportive SMM : ₹${supportTotal.toFixed(2)}\n` +
            `TNT SMM : ₹${indTotal.toFixed(2)}\n\n` +
            `━━━━━━━━━━━━━━\n` +
            `💸 TOTAL SPEND : ₹${totalSpend.toFixed(2)}\n\n` +
            `━━━━━━━━━━━━━━\n` +
            `${netProfit >= 0 ? '🟢' : '🔴'} NET PROFIT : ₹${netProfit.toFixed(2)}`
        );
    }
}

export const botService = new BotService();
