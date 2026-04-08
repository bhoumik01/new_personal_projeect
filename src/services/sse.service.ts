import { Response } from 'express';
import { logger } from '../utils/logger';

/**
 * Server-Sent Events (SSE) Service
 * Manages active client connections and broadcasts updates.
 */
class SSEService {
    private clients: Map<string, Response[]> = new Map();
    private heartbeatInterval: NodeJS.Timeout | null = null;
    private readonly MAX_CLIENTS_PER_ORDER = 10;

    constructor() {
        this.startHeartbeat();
    }

    /**
     * Start a periodic heartbeat to all clients.
     * This helps detect dead connections that haven't emitted 'close' yet.
     */
    private startHeartbeat(): void {
        this.heartbeatInterval = setInterval(() => {
            if (this.clients.size === 0) return;

            this.clients.forEach((clients, orderId) => {
                clients.forEach(res => {
                    // Send a comment as heartbeat (ignored by EventSource)
                    const success = res.write(': heartbeat\n\n');
                    if (!success) {
                        logger.warn(`[SSE] Heartbeat failed for a client of order: ${orderId}. Connection might be congested.`);
                    }
                });
            });
        }, 30000); // 30 seconds
        this.heartbeatInterval.unref();
    }

    /**
     * Add a client to listen for updates on a specific order.
     */
    addClient(orderId: string, res: Response): void {
        const clients = this.clients.get(orderId) || [];
        
        // Prevent abuse: limit clients per order
        if (clients.length >= this.MAX_CLIENTS_PER_ORDER) {
            logger.warn(`[SSE] Max clients reached for order: ${orderId}. Rejecting new connection.`);
            res.status(429).end('Too many connections for this order');
            return;
        }

        clients.push(res);
        this.clients.set(orderId, clients);

        logger.info(`[SSE] Client connected for order: ${orderId}. Total: ${clients.length}`);

        // Remove client on connection close
        res.on('close', () => {
            this.removeClient(orderId, res);
        });

        // Also handle errors
        res.on('error', (err) => {
            logger.error(`[SSE] Response error for order ${orderId}:`, err);
            this.removeClient(orderId, res);
        });
    }

    /**
     * Remove a client connection.
     */
    private removeClient(orderId: string, res: Response): void {
        const clients = this.clients.get(orderId);
        if (clients) {
            const filteredClients = clients.filter(client => client !== res);
            if (filteredClients.length > 0) {
                this.clients.set(orderId, filteredClients);
            } else {
                this.clients.delete(orderId);
            }
            logger.info(`[SSE] Client removed for order: ${orderId}. Remaining: ${filteredClients.length}`);
        }
    }

    /**
     * Broadcast an update to all clients listening for a specific order.
     */
    broadcastStatus(orderId: string, status: string, data?: any): void {
        const clients = this.clients.get(orderId);
        if (clients && clients.length > 0) {
            const payload = JSON.stringify({ orderId, status, ...data });
            logger.info(`[SSE] Broadcasting status update for order ${orderId}: ${status}`);

            clients.forEach(res => {
                const success = res.write(`data: ${payload}\n\n`);
                if (!success) {
                    // Backpressure detected: Res buffer is full. 
                    // To prevent memory leak, we might want to disconnect slow clients
                    // but for now we just log it.
                    logger.warn(`[SSE] Backpressure detected for order: ${orderId}. Client buffer full.`);
                }
            });
        }
    }

    /**
     * Get total active connections across all orders.
     */
    getActiveConnectionCount(): number {
        let count = 0;
        this.clients.forEach(clients => {
            count += clients.length;
        });
        return count;
    }

    /**
     * Clean up service on shutdown.
     */
    destroy(): void {
        if (this.heartbeatInterval) {
            clearInterval(this.heartbeatInterval);
        }
    }
}

export const sseService = new SSEService();
