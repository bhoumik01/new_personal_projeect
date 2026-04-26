import axios from 'axios';
import { env } from '../config/env';
import { logger } from '../utils/logger';
import { SmmProvider } from '../../generated/prisma/index.js';
import {
    SmmService,
    SmmAddOrderResponse,
    SmmOrderStatusResponse,
    SmmBalanceResponse,
} from '../types';

/**
 * Generic SMM Panel Service
 * Integrates with generic SMM panel API (v2 standard).
 */
class SmmService_Class {
    constructor(
        private readonly apiUrl: string,
        private readonly apiKey: string,
        private readonly panelName: string
    ) { }

    /**
     * Generic helper to post to the SSM panel API.
     */
    private async post<T>(params: Record<string, string | number>): Promise<T> {
        if (!this.apiKey) {
            throw new Error(`API Key for ${this.panelName} is not configured`);
        }

        const payload = new URLSearchParams({
            key: this.apiKey,
            ...Object.entries(params).reduce(
                (acc, [k, v]) => ({ ...acc, [k]: String(v) }),
                {} as Record<string, string>
            ),
        });

        const response = await axios.post<T>(this.apiUrl, payload.toString(), {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            timeout: 20000,
        });

        return response.data;
    }

    /**
     * Fetch all available services from the panel.
     */
    async getServices(): Promise<SmmService[]> {
        try {
            logger.info(`[${this.panelName}] Fetching service list...`);
            const services = await this.post<SmmService[]>({ action: 'services' });
            logger.info(`[${this.panelName}] Fetched ${services.length} services`);
            return services;
        } catch (error) {
            logger.error(`[${this.panelName}] Failed to fetch services:`, error);
            throw new Error(`${this.panelName} getServices failed: ${(error as Error).message}`);
        }
    }

    /**
     * Place an order on the SMM panel.
     * @returns the SSM panel order ID
     */
    async placeOrder(params: {
        serviceId: number;
        link: string;
        quantity: number;
        runs?: number;
        interval?: number;
        comments?: string;
    }): Promise<number> {
        try {
            logger.info(`[${this.panelName}] Placing order: service=${params.serviceId}, link=${params.link}, qty=${params.quantity}`);

            const payload: Record<string, string | number> = {
                action: 'add',
                service: params.serviceId,
                link: params.link,
                quantity: params.quantity,
            };

            if (params.runs) payload.runs = params.runs;
            if (params.interval) payload.interval = params.interval;
            if (params.comments) payload.comments = params.comments;

            const response = await this.post<SmmAddOrderResponse>(payload);

            if (response.error) {
                throw new Error(response.error);
            }

            if (!response.order) {
                throw new Error('Panel returned no order ID');
            }

            logger.success(`[${this.panelName}] Order placed successfully. Order ID: ${response.order}`);
            return response.order;
        } catch (error) {
            logger.error(`[${this.panelName}] Failed to place order:`, error);
            throw new Error(`${this.panelName} placeOrder failed: ${(error as Error).message}`);
        }
    }

    /**
     * Get the status of an existing SSM order.
     */
    async getOrderStatus(smmOrderId: string | number): Promise<SmmOrderStatusResponse> {
        try {
            logger.info(`[${this.panelName}] Checking order status: ${smmOrderId}`);

            const response = await this.post<SmmOrderStatusResponse>({
                action: 'status',
                order: smmOrderId,
            });

            if (response.error) {
                throw new Error(response.error);
            }

            return response;
        } catch (error) {
            logger.error(`[${this.panelName}] Failed to get order status for ${smmOrderId}:`, error);
            throw new Error(`${this.panelName} getOrderStatus failed: ${(error as Error).message}`);
        }
    }

    /**
     * Get the current account balance on the SSM panel.
     */
    async getBalance(): Promise<{ balance: string; currency: string }> {
        try {
            logger.info(`[${this.panelName}] Fetching balance...`);

            const response = await this.post<SmmBalanceResponse>({ action: 'balance' });

            if (response.error) {
                throw new Error(response.error);
            }

            return {
                balance: response.balance ?? '0',
                currency: response.currency ?? 'USD',
            };
        } catch (error) {
            logger.error(`[${this.panelName}] Failed to get balance:`, error);
            throw new Error(`${this.panelName} getBalance failed: ${(error as Error).message}`);
        }
    }
}

// ─── Provider Instances ───

export const supportiveSmmService = new SmmService_Class(
    env.SUPPORTIVE_SMM_API_URL,
    env.SUPPORTIVE_SMM_API_KEY || '',
    'Supportive SMM'
);

export const indSmmService = new SmmService_Class(
    env.IND_SMM_API_URL,
    env.IND_SMM_API_KEY || '',
    'TNT SMM'
);

/**
 * Helper to get the correct service instance based on provider.
 */
export function getSmmService(provider: SmmProvider) {
    switch (provider) {
        case 'SUPPORTIVE':
            return supportiveSmmService;
        case 'IND':
            return indSmmService;
        default:
            return supportiveSmmService;
    }
}

// Export a default for backward compatibility if needed (defaults to Supportive)
export const smmService = supportiveSmmService;

