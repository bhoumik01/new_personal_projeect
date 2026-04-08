import { Telegraf } from 'telegraf';
import { env } from '../config/env';
import { logger } from '../utils/logger';
import { prisma } from '../../lib/initiatePrisma';

/**
 * Bot Worker — Group Join Approval
 *
 * Listens for `my_chat_member` updates (fired when the bot's own
 * membership status changes in any chat).
 *
 * Flow:
 *  1. Bot is added to a group → bot leaves immediately.
 *  2. Admin receives a notification with ✅ Approve / ❌ Reject inline buttons.
 *  3. Approve  → bot records approval (admin must manually re-add for private groups).
 *  4. Reject   → bot stays out, message updated accordingly.
 */

let botWorkerInstance: Telegraf | null = null;

export async function startBotWorker(): Promise<void> {
    if (botWorkerInstance) {
        logger.info('[BotWorker] Bot worker already initialised, skipping restart');
        return;
    }

    if (!env.ENABLE_BOT_WORKER) {
        logger.info('[BotWorker] Skipping bot worker init because ENABLE_BOT_WORKER=false');
        return;
    }

    if (!env.TELEGRAM_BOT_TOKEN || env.TELEGRAM_BOT_TOKEN.includes('your_')) {
        logger.warn('[BotWorker] TELEGRAM_BOT_TOKEN not configured — group-join approval disabled');
        return;
    }

    if (!env.TELEGRAM_ADMIN_CHAT_ID || env.TELEGRAM_ADMIN_CHAT_ID.includes('your_')) {
        logger.warn('[BotWorker] TELEGRAM_ADMIN_CHAT_ID not configured — group-join approval disabled');
        return;
    }

    const bot = new Telegraf(env.TELEGRAM_BOT_TOKEN as string);
    const adminChatId = env.TELEGRAM_ADMIN_CHAT_ID as string;
    botWorkerInstance = bot;

    // ─────────────────────────────────────────────────────────────
    // GROUP JOIN EVENT
    // Triggered when the bot's own membership status changes.
    // ─────────────────────────────────────────────────────────────
    bot.on('my_chat_member', async (ctx) => {
        const update = ctx.myChatMember;
        const newStatus = update.new_chat_member.status;
        const chat = update.chat;

        // Only handle when bot is being added (member or admin) to a group/supergroup
        const isGroup = chat.type === 'group' || chat.type === 'supergroup';
        const isJoining = newStatus === 'member' || newStatus === 'administrator';

        if (!isGroup || !isJoining) return;

        const groupId = chat.id;
        const groupIdStr = String(groupId);
        const groupTitle = (chat as { title?: string }).title ?? 'Unknown Group';
        const addedBy = update.from;
        const addedByName =
            [addedBy.first_name, addedBy.last_name].filter(Boolean).join(' ') ||
            addedBy.username ||
            `User #${addedBy.id}`;

        logger.info(`[BotWorker] Bot added to group: "${groupTitle}" (${groupIdStr}) by ${addedByName}`);

        // ── Step 0: Check if group is already approved ────────────────
        try {
            const isApproved = await prisma.approvedGroup.findUnique({
                where: { chatId: groupIdStr }
            });

            if (isApproved) {
                logger.info(`[BotWorker] Group ${groupIdStr} is already approved. Staying in group.`);
                // Optionally send a greeting if it's a new join
                await ctx.telegram.sendMessage(groupId, `✅ Bot is active in this group.`);
                return;
            }
        } catch (err) {
            logger.error(`[BotWorker] Database check failed for group ${groupIdStr}:`, err);
        }

        // ── Step 1: Leave the group immediately ────────────────────
        try {
            await ctx.telegram.leaveChat(groupId);
            logger.info(`[BotWorker] Left group ${groupIdStr} pending admin approval`);
        } catch (err) {
            logger.warn(`[BotWorker] Could not leave group ${groupIdStr}:`, err);
        }

        // ── Step 2: Notify admin with approve/reject buttons ───────
        const approvalMessage =
            `🔔 <b>Group Join Request</b>\n\n` +
            `The bot was just added to a group and has left pending your approval.\n\n` +
            `📛 <b>Group:</b> ${groupTitle}\n` +
            `🆔 <b>Group ID:</b> <code>${groupId}</code>\n` +
            `👤 <b>Added by:</b> ${addedByName}\n` +
            `🕐 <b>Time:</b> ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}\n\n` +
            `Choose an action below:`;

        try {
            await ctx.telegram.sendMessage(adminChatId, approvalMessage, {
                parse_mode: 'HTML',
                reply_markup: {
                    inline_keyboard: [
                        [
                            { text: '✅ Approve', callback_data: `approve:${groupId}:${encodeURIComponent(groupTitle)}` },
                            { text: '❌ Reject', callback_data: `reject:${groupId}:${encodeURIComponent(groupTitle)}` },
                        ],
                    ],
                },
            });
            logger.info(`[BotWorker] Sent approval request to admin for group ${groupId}`);
        } catch (err) {
            logger.error('[BotWorker] Failed to send approval message to admin:', err);
        }
    });

    // ─────────────────────────────────────────────────────────────
    // INLINE BUTTON CALLBACKS (Approve / Reject)
    // ─────────────────────────────────────────────────────────────
    bot.on('callback_query', async (ctx) => {
        if (!ctx.callbackQuery || !('data' in ctx.callbackQuery)) return;

        const data = ctx.callbackQuery.data;
        if (!data) return;

        const [action, groupIdStr, encodedTitle] = data.split(':');
        if (action !== 'approve' && action !== 'reject') return;

        const groupId = parseInt(groupIdStr, 10);
        const groupTitle = encodedTitle ? decodeURIComponent(encodedTitle) : `Group #${groupId}`;

        // Acknowledge the button press immediately (removes spinner)
        await ctx.answerCbQuery();

        if (action === 'approve') {
            logger.info(`[BotWorker] Admin approved group: "${groupTitle}" (${groupIdStr})`);

            // Save approval to database
            try {
                await prisma.approvedGroup.upsert({
                    where: { chatId: groupIdStr },
                    update: { title: groupTitle },
                    create: {
                        chatId: groupIdStr,
                        title: groupTitle,
                    },
                });
                logger.info(`[BotWorker] Approval persisted to DB for ${groupIdStr}`);
            } catch (err) {
                logger.error(`[BotWorker] Failed to persist approval for ${groupIdStr}:`, err);
            }

            // Update the approval message
            await ctx.editMessageText(
                `✅ <b>Approved</b>\n\n` +
                `📛 <b>Group:</b> ${groupTitle}\n` +
                `🆔 <b>Group ID:</b> <code>${groupIdStr}</code>\n\n` +
                `The bot has been approved for this group and will stay if re-added.\n` +
                `<i>Note: For private/invite-only groups, please manually re-add the bot.</i>`,
                { parse_mode: 'HTML' }
            );

            // Attempt to unban/re-join the bot in the group (works for public/supergroups)
            try {
                await ctx.telegram.unbanChatMember(groupId, ctx.botInfo.id, { only_if_banned: true });
                logger.info(`[BotWorker] Unbanned bot in group ${groupIdStr} — admin can now re-add it`);
            } catch (err) {
                // Non-fatal: bot was not banned or group is private — admin will handle manually
                logger.debug(`[BotWorker] unbanChatMember skipped (expected for non-banned bots):`, err);
            }

        } else {
            logger.info(`[BotWorker] Admin rejected group: "${groupTitle}" (${groupId})`);

            await ctx.editMessageText(
                `❌ <b>Rejected</b>\n\n` +
                `📛 <b>Group:</b> ${groupTitle}\n` +
                `🆔 <b>Group ID:</b> <code>${groupId}</code>\n\n` +
                `The bot will not join this group.`,
                { parse_mode: 'HTML' }
            );
        }
    });

    // ─────────────────────────────────────────────────────────────
    // Start long-polling (non-blocking)
    // ─────────────────────────────────────────────────────────────
    bot.launch({
        dropPendingUpdates: true,         // Ignore stale join events from before startup
        allowedUpdates: ['my_chat_member', 'callback_query'],
    })
    .then(() => logger.success('[BotWorker] Bot long-polling started (group-join approval active)'))
    .catch((err) => logger.error('[BotWorker] Failed to start bot long-polling:', err));

    // Graceful stop hooks
    process.once('SIGINT', () => bot.stop('SIGINT'));
    process.once('SIGTERM', () => bot.stop('SIGTERM'));

    logger.info('[BotWorker] Bot worker initialised');
}

/**
 * Stop the bot worker (for graceful shutdown).
 */
export function stopBotWorker(): void {
    if (botWorkerInstance) {
        botWorkerInstance.stop('shutdown');
        botWorkerInstance = null;
        logger.info('[BotWorker] Bot worker stopped');
    }
}
