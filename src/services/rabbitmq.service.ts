import amqplib, { Channel, ConfirmChannel } from 'amqplib';
import { env } from '../config/env';
import { logger } from '../utils/logger';

export const QUEUES = {
    PAYMENT_SUCCESS: 'payment_success',
    PAYMENT_FAILED: 'payment_failed',
    ORDER_NOTIFY: 'order_notify',
} as const;

type AmqpConnection = Awaited<ReturnType<typeof amqplib.connect>>;
type ConsumeMessage = amqplib.ConsumeMessage;

export type { ConsumeMessage };

interface Consumer {
    queue: string;
    handler: (message: ConsumeMessage) => Promise<void>;
    prefetchCount: number;
}

/**
 * RabbitMQ Service
 * Manages connection, publishing, and consuming messages.
 */
class RabbitMQService {
    private connection: AmqpConnection | null = null;
    private channel: Channel | null = null;
    private reconnecting = false;
    private connectingPromise: Promise<void> | null = null;
    private consumers: Consumer[] = [];

    async connect(): Promise<void> {
        // Prevent concurrent connection attempts
        if (this.connectingPromise) {
            return this.connectingPromise;
        }

        this.connectingPromise = (async () => {
            try {
                // Close existing channel/connection if they exist to prevent leaks
                if (this.channel) {
                    try { await this.channel.close(); } catch (e) { /* ignore */ }
                }
                if (this.connection) {
                    try { await this.connection.close(); } catch (e) { /* ignore */ }
                }

                logger.info('[RabbitMQ] Connecting to broker...');
                this.connection = await amqplib.connect(env.RABBITMQ_URL);
                this.channel = await this.connection.createChannel();

                // Assert all queues as durable (survive broker restart)
                await this.channel.assertQueue(QUEUES.PAYMENT_SUCCESS, { durable: true });
                await this.channel.assertQueue(QUEUES.PAYMENT_FAILED, { durable: true });
                await this.channel.assertQueue(QUEUES.ORDER_NOTIFY, { durable: true });

                this.reconnecting = false;
                logger.success('[RabbitMQ] Connected and queues asserted');

                // Re-register consumers if any
                if (this.consumers.length > 0) {
                    logger.info(`[RabbitMQ] Re-registering ${this.consumers.length} consumers...`);
                    for (const consumer of this.consumers) {
                        await this.setupConsumer(consumer);
                    }
                }

                // Handle connection errors and close events
                (this.connection as unknown as NodeJS.EventEmitter).on('error', (err: Error) => {
                    logger.error('[RabbitMQ] Connection error:', err.message);
                    this.reconnect();
                });

                (this.connection as unknown as NodeJS.EventEmitter).on('close', () => {
                    logger.warn('[RabbitMQ] Connection closed, reconnecting...');
                    this.reconnect();
                });
            } catch (error) {
                logger.error('[RabbitMQ] Failed to connect:', error);
                this.connection = null;
                this.channel = null;
                throw error;
            } finally {
                this.connectingPromise = null;
            }
        })();

        return this.connectingPromise;
    }

    private reconnect(): void {
        if (this.reconnecting) return;
        this.reconnecting = true;
        
        // Clear references but don't close yet (might already be closed/errored)
        this.connection = null;
        this.channel = null;

        setTimeout(async () => {
            try {
                await this.connect();
            } catch {
                logger.error('[RabbitMQ] Reconnect failed, retrying in 5s...');
                this.reconnecting = false;
                this.reconnect();
            }
        }, 5000);
    }

    /**
     * Publish a message to a queue.
     */
    async publishToQueue(queue: string, message: object): Promise<boolean> {
        try {
            if (!this.channel) {
                throw new Error('RabbitMQ channel is not initialized');
            }

            const content = Buffer.from(JSON.stringify(message));
            const result = this.channel.sendToQueue(queue, content, {
                persistent: true,
                contentType: 'application/json',
                timestamp: Date.now(),
            });

            logger.info(`[RabbitMQ] Published to "${queue}"`);
            return result;
        } catch (error) {
            logger.error(`[RabbitMQ] Failed to publish to "${queue}":`, error);
            throw error;
        }
    }

    /**
     * Consume messages from a queue.
     */
    async consumeQueue(
        queue: string,
        handler: (message: ConsumeMessage) => Promise<void>,
        prefetchCount = 1
    ): Promise<void> {
        // Avoid duplicate consumers for the same queue
        const existing = this.consumers.find(c => c.queue === queue && c.handler === handler);
        if (existing) {
            logger.debug(`[RabbitMQ] Consumer already registered for queue: ${queue}`);
            return;
        }

        const consumer: Consumer = { queue, handler, prefetchCount };
        this.consumers.push(consumer);

        if (this.channel) {
            await this.setupConsumer(consumer);
        }
    }

    private async setupConsumer(consumer: Consumer): Promise<void> {
        const currentChannel = this.channel;
        if (!currentChannel) return;

        const { queue, handler, prefetchCount } = consumer;
        await currentChannel.prefetch(prefetchCount);

        await currentChannel.consume(queue, async (msg) => {
            if (!msg) return;

            try {
                await handler(msg);
                // Use the channel that created the consumer, not the potentially new one
                currentChannel.ack(msg);
            } catch (error) {
                logger.error(`[RabbitMQ] Error processing message from "${queue}":`, error);
                try {
                    currentChannel.nack(msg, false, false);
                } catch (nackErr) {
                    logger.error('[RabbitMQ] Failed to nack message:', nackErr);
                }
            }
        });

        logger.info(`[RabbitMQ] Started consuming from queue: "${queue}"`);
    }

    async close(): Promise<void> {
        try {
            const ch = this.channel;
            const conn = this.connection;
            this.channel = null;
            this.connection = null;
            
            await ch?.close();
            await (conn as any)?.close();
            logger.info('[RabbitMQ] Connection closed gracefully');
        } catch (error) {
            logger.error('[RabbitMQ] Error closing connection:', error);
        }
    }

    isConnected(): boolean {
        return this.connection !== null && this.channel !== null;
    }
}

export const rabbitMQService = new RabbitMQService();
