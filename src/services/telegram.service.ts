import { Telegraf } from 'telegraf';
import { env } from '../config/env';
import { logger } from '../utils/logger';
import { getPlatformNameFromUrl } from '../utils/platform.util';
import { prisma } from '../../lib/initiatePrisma';
import { getServiceNameForId } from '../utils/smm.mapper';

/**
 * Telegram Bot Service (Main Backend)
 *
 * This service handles:
 *  - Sending SUCCESS notifications to the main bot
 *  - Sending FAILED ORDER alerts to the failed orders bot chat
 *
 * The "y"-reply approval handler lives in telegram-bot-backend/src/bot/failedOrderBot.ts
 * and uses the shared PostgreSQL DB to mark orders as COMPLETED.
 */
class TelegramService {
    private isEnabled: boolean;
    private mainBot: Telegraf | null = null;
    private failedBot: Telegraf | null = null;
    private adminChatId: string;
    private failedChatId: string | null = null;
    private isMainConfigured: boolean;
    private isFailedConfigured: boolean;

    constructor() {
        this.isEnabled = env.ENABLE_TELEGRAM;
        if (!this.isEnabled) {
            logger.warn('[Telegram] TELEGRAM disabled via ENABLE_TELEGRAM=false. Notifications are off.');
        }

        this.adminChatId = env.TELEGRAM_ADMIN_CHAT_ID ?? '';
        this.isMainConfigured = this.isEnabled && !!(
            env.TELEGRAM_BOT_TOKEN &&
            !env.TELEGRAM_BOT_TOKEN.includes('your_') &&
            env.TELEGRAM_ADMIN_CHAT_ID &&
            !env.TELEGRAM_ADMIN_CHAT_ID.includes('your_')
        );

        if (this.isMainConfigured) {
            this.mainBot = new Telegraf(env.TELEGRAM_BOT_TOKEN as string);
            logger.success('[Telegram] Main bot configured');
        } else if (this.isEnabled) {
            logger.warn('[Telegram] Main bot not configured — success notifications will be skipped');
        }

        // Failed orders bot — create ONCE, reuse for every notification (singleton)
        const failedBotToken = env.TELEGRAM_FAILED_BOT_TOKEN ?? null;
        this.failedChatId = env.TELEGRAM_FAILED_CHAT_ID ?? null;
        this.isFailedConfigured = !!(
            failedBotToken &&
            !failedBotToken.includes('your_') &&
            this.failedChatId &&
            !this.failedChatId.includes('your_')
        );

        if (this.isFailedConfigured) {
            this.failedBot = new Telegraf(failedBotToken as string);
            logger.info('[Telegram] Failed orders bot initialized (singleton)');
        } else {
            logger.warn('[Telegram] Failed orders bot not configured — failed alerts will go to main bot');
        }
    }

    // ─────────────────────────────────────────────
    // Internal helpers
    // ─────────────────────────────────────────────

    private async sendToMain(message: string): Promise<void> {
        if (!this.isEnabled) {
            logger.debug('[Telegram] Notifications disabled by ENABLE_TELEGRAM=false. Skipping main send.');
            return;
        }
        if (!this.isMainConfigured || !this.mainBot) {
            logger.warn('[Telegram] Main bot skipped (not configured)');
            return;
        }
        try {
            await this.mainBot.telegram.sendMessage(this.adminChatId, message, { parse_mode: 'HTML' });
        } catch (error) {
            logger.error('[Telegram] Failed to send to main bot:', error);
        }
    }

    private async sendToFailed(message: string): Promise<boolean> {
        if (!this.isEnabled) {
            logger.debug('[Telegram] Notifications disabled by ENABLE_TELEGRAM=false. Skipping failed send.');
            return false;
        }
        if (!this.isFailedConfigured || !this.failedBot || !this.failedChatId) {
            logger.warn('[Telegram] Failed bot skipped (not configured)');
            return false;
        }

        try {
            await this.failedBot.telegram.sendMessage(this.failedChatId, message, { parse_mode: 'HTML' });
            return true;
        } catch (error) {
            logger.error('[Telegram] Failed to send to failed bot:', error);
            return false;
        }
    }

    // ─────────────────────────────────────────────
    // Public notification methods
    // ─────────────────────────────────────────────

    /**
     * Notify admin of a successfully placed order (main bot).
     */
    async notifyOrderSuccess(params: {
        orderId: string;
        serviceId: number;
        serviceName?: string;
        link: string;
        quantity: number;
        amount: number;
        utr: string;
        smmOrderId?: string | number;
        customerMobile?: string;
        apiStatus?: string;
    }): Promise<void> {
        if (!this.isEnabled) {
            logger.debug(`[Telegram] notifyOrderSuccess skipped because ENABLE_TELEGRAM=false`);
            return;
        }

        const serviceName = params.serviceName || getServiceNameForId(params.serviceId);
        const platform = getPlatformNameFromUrl(params.link);
        const isClickableLink = params.link.startsWith('http://') || params.link.startsWith('https://');
        const formattedLink = isClickableLink ? params.link : `<code>${params.link}</code>`;
        const apiStatus = params.apiStatus || (params.smmOrderId ? 'Successfully Placed' : 'Order Not Placed');

        const message =
            `New Order Received\n\n` +
            `Order ID: <code>${params.orderId}</code>\n` +
            `Quality : ${params.quantity}\n` +
            `Link : ${formattedLink}\n` +
            `Amount : ₹${params.amount}\n` +
            `Service: ${serviceName || params.serviceId}\n` +
            `Created AT Today, (${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false })})\n\n` +
            `API Status: ${apiStatus}`;

        await this.sendToMain(message);
    }


    /**
     * Notify admin of a payment failure (main bot).
     */
    async notifyPaymentFailed(params: {
        orderId: string;
        amount: number;
        reason: string;
        customerMobile?: string;
    }): Promise<void> {
        if (!this.isEnabled) {
            logger.debug(`[Telegram] notifyPaymentFailed skipped because ENABLE_TELEGRAM=false`);
            return;
        }

        // If it's a timeout/expiry, route to console only as requested
        const isExpiry = params.reason.toLowerCase().includes('timeout') || 
                         params.reason.toLowerCase().includes('expire') ||
                         params.reason.toLowerCase().includes('timed out');

        const message =
            `❌ <b>PAYMENT FAILED</b>\n\n` +
            `🆔 <b>Order ID:</b> <code>${params.orderId}</code>\n` +
            `💰 <b>Amount:</b> ₹${params.amount}\n` +
            `⚠️ <b>Reason:</b> ${params.reason}\n` +
            (params.customerMobile ? `📱 <b>Customer Mobile:</b> ${params.customerMobile}\n` : '') +
            `🕐 <b>Time:</b> ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', second: '2-digit' })}`;

        if (isExpiry) {
            logger.info(`[Telegram] notifyPaymentFailed (Console Only): Order ${params.orderId} failed due to expiry/timeout`);
            return;
        }

        await this.sendToMain(message);
    }

    /**
     * Notify admin of an SMM placement failure (failed orders bot).
     * This is called by the notification worker when an SMM_FAILED event is received.
     */
    async notifySmmOrderFailed(params: {
        orderId: string;
        serviceId: number;
        link: string;
        quantity: number;
        amount: number;
        utr?: string;
        smmOrderId?: string;
        error: string;
    }): Promise<void> {
        if (!this.isEnabled) {
            logger.debug(`[Telegram] notifySmmOrderFailed skipped because ENABLE_TELEGRAM=false`);
            return;
        }
        await this.notifyFailedOrderBot(params);
    }

    /**
     * Send a failed/manual order alert to the failed orders bot chat.
     * The telegram-bot-backend runs the listener that handles "y" replies.
     */
    async notifyFailedOrderBot(params: {
        orderId: string;
        serviceId: number;
        serviceName?: string;
        link: string;
        quantity: number;
        amount: number;
        utr?: string;
        smmOrderId?: string;
        error: string;
        provider?: string;
        apiStatus?: string;
    }): Promise<void> {
        if (!this.isEnabled) {
            logger.debug(`[Telegram] notifyFailedOrderBot skipped because ENABLE_TELEGRAM=false`);
            return;
        }

        const serviceName = params.serviceName || getServiceNameForId(params.serviceId);
        const platform = getPlatformNameFromUrl(params.link);
        const isClickableLink = params.link.startsWith('http://') || params.link.startsWith('https://');
        const formattedLink = isClickableLink ? params.link : `<code>${params.link}</code>`;
        const apiStatus = params.apiStatus || 'Order Not Placed';

        const message =
            `New Order Received\n\n` +
            `Order ID: <code>${params.orderId}</code>\n` +
            `Quality : ${params.quantity}\n` +
            `Link : ${formattedLink}\n` +
            `Amount : ₹${params.amount}\n` +
            `Service: ${serviceName || params.serviceId}\n` +
            `Created AT Today, (${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false })})\n\n` +
            `API Status: ${apiStatus}\n` +
            `Error: ${params.error}\n\n` +
            `Reply "y" to this message to approve manually.`;

        if (this.isFailedConfigured && this.failedBot && this.failedChatId) {
            // Send via the singleton failed bot instance (reused connection)
            try {
                const sentMsg = await this.failedBot.telegram.sendMessage(this.failedChatId, message, { parse_mode: 'HTML' });

                // Persist the messageId -> orderId mapping so the bot backend can find it
                try {
                    await prisma.failedOrderMessage.upsert({
                        where: { messageId: sentMsg.message_id },
                        create: {
                            messageId: sentMsg.message_id,
                            orderId: params.orderId,
                        },
                        update: {
                            orderId: params.orderId,
                        }
                    });
                    logger.info(`[Telegram] Persisted failed order mapping: ${sentMsg.message_id} -> ${params.orderId}`);
                } catch (dbErr) {
                    logger.error(`[Telegram] Failed to persist mapping to DB:`, dbErr);
                }

                logger.info(`[Telegram] Failed order alert sent for ${params.orderId}`);
            } catch (error) {
                logger.error('[Telegram] Failed to send alert via failed bot, falling back to main bot:', error);
                await this.sendToMain(message);
            }
        } else {
            // Fallback to main bot
            await this.sendToMain(message);
        }
    }

    /**
     * @deprecated — new-order creation notifications are disabled.
     */
    async notifyNewOrder(_params: {
        orderId: string;
        serviceId: number;
        link: string;
        quantity: number;
        amount: number;
        customerMobile?: string;
    }): Promise<void> {
        // Intentionally no-op.
    }
}

export const telegramService = new TelegramService();
