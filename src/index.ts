import 'dotenv/config';
import app from './app';
import { env } from './config/env';
import { prisma } from '../lib/initiatePrisma';
import { rabbitMQService } from './services/rabbitmq.service';
import { startPaymentWorker } from './workers/payment.worker';
import { startNotificationWorker } from './workers/notification.worker';
import { startBotWorker, stopBotWorker } from './workers/bot.worker';
import { logger } from './utils/logger';

const PORT = parseInt(env.PORT, 10);

async function main() {

    // 1. Start Express server IMMEDIATELLY to satisfy health checks
    const server = app.listen(PORT, '0.0.0.0', () => {
        logger.success(`✅ Server running at http://0.0.0.0:${PORT}`);
        logger.info(`📋 API Docs:`);
        logger.info(`   POST http://localhost:${PORT}/api/orders          ← Create SMM order`);
        logger.info(`   GET  http://localhost:${PORT}/health              ← Health check`);
    });


    if (!env.ENABLE_TELEGRAM) {
        logger.warn('[Startup] Telegram notifications are disabled by ENABLE_TELEGRAM=false. Success/failure alerts will be skipped.');
    }

    // ─── Production Security Checks ───
    if (env.NODE_ENV === 'production') {
        if (!env.API_AUTH_KEY) {
            logger.error('❌ FATAL: API_AUTH_KEY is not set. Refusing to start in production without API authentication.');
            process.exit(1);
        }

        logger.success('✅ Production security checks passed');
    }

    // 2. Connect to PostgreSQL via Prisma
    try {
        await prisma.$connect();
        logger.success('✅ PostgreSQL connected');
    } catch (error) {
        logger.error('❌ PostgreSQL connection failed:', error);
        // We don't exit here immediately to let the user see the error in logs via /health if we wanted to
    }

    // 3. Connect to RabbitMQ and start workers
    try {
        await startPaymentWorker();
        await startNotificationWorker();
        if (env.ENABLE_BOT_WORKER) {
            await startBotWorker();
        } else {
            logger.info('[Startup] Bot worker disabled by ENABLE_BOT_WORKER=false');
        }
        logger.success('✅ Background workers started');
    } catch (error) {
        logger.error('❌ RabbitMQ connection failed:', error);
        logger.warn('⚠️  Server will start but processing may not work until RabbitMQ is available');
    }

    // Graceful shutdown
    const shutdown = async (signal: string) => {
        logger.warn(`\n[${signal}] Shutting down gracefully...`);

        server.close(async () => {
            logger.info('Express server closed');
            await prisma.$disconnect();
            logger.info('PostgreSQL disconnected');
            await rabbitMQService.close();
            logger.info('RabbitMQ disconnected');
            stopBotWorker();
            process.exit(0);
        });

        // Force exit after 10 seconds
        setTimeout(() => {
            logger.error('Forced shutdown after 10s timeout');
            process.exit(1);
        }, 10000);
    };
    const getSpends=async ()=>{
        console.log("getSpends");
        const spend=await prisma.spend.aggregate({
            where:{
                createdAt:{gte:new Date(new Date().setHours(0,0,0,0)),
                    lt:new Date(new Date().setHours(24,0,0,0))
                }
            },
            _sum:{
                amount:true
            }        });
            
        return spend;
    }
    console.log(getSpends());
    process.on('SIGINT', () => shutdown('SIGINT'));
    process.on('SIGTERM', () => shutdown('SIGTERM'));

    process.on('unhandledRejection', (reason) => {
        logger.error('Unhandled Promise Rejection:', reason);
    });

    process.on('uncaughtException', (error) => {
        logger.error('Uncaught Exception:', error);
        process.exit(1);
    });
}

main();
