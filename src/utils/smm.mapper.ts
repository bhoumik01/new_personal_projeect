import { SmmProvider } from '../../generated/prisma/index.js';
import { ServiceCategory } from '../services/instagram.validator';

/**
 * Maps Service IDs to their respective SMM Providers.
 * TNT SMM panel (stored as 'IND' in DB — no DB changes needed).
 */
const SERVICE_PROVIDER_MAP: Record<number, SmmProvider> = {
    // Supportive SMM
    602:   'SUPPORTIVE', // Reel Views
    670:   'SUPPORTIVE', // Comment

    // TNT SMM (stored as IND in DB)
    12587: 'IND',        // Likes
    10183: 'IND',        // Followers
};

/**
 * Maps Service IDs to their display names.
 */
const SERVICE_NAME_MAP: Record<number, string> = {
    602:   'Reel Views',
    670:   'Comment',
    12587: 'Likes',
    10183: 'Followers',
};

/**
 * Maps Service IDs to their specific categories.
 */
const SERVICE_CATEGORY_MAP: Record<number, ServiceCategory> = {
    602:   'views',
    670:   'comments',
    12587: 'likes',
    10183: 'followers',
};

/**
 * Maps Service IDs to their allowed quantities.
 * Only orders with these quantities will be placed on the SMM panel.
 * Orders with other quantities are completed immediately (manual handling).
 */
const ALLOWED_SERVICE_QUANTITIES: Record<number, number[]> = {
    602:   [5000, 10000, 25000],
    670:   [100],
    12587: [1000],
    10183: [50, 100, 200],
};

/**
 * Determines the SMM Provider for a given Service ID.
 * Defaults to SUPPORTIVE if not found.
 */
export function getProviderForService(serviceId: number): SmmProvider {
    return SERVICE_PROVIDER_MAP[serviceId] || 'SUPPORTIVE';
}

/**
 * Gets the definitive service name for a given Service ID.
 */
export function getServiceNameForId(serviceId: number): string | null {
    return SERVICE_NAME_MAP[serviceId] || null;
}

/**
 * Gets the correct service category for a given Service ID.
 */
export function getCategoryForId(serviceId: number): ServiceCategory | null {
    return SERVICE_CATEGORY_MAP[serviceId] || null;
}

/**
 * Checks if a given quantity is allowed for the specific Service ID.
 */
export function isValidQuantity(serviceId: number, quantity: number): boolean {
    const allowed = ALLOWED_SERVICE_QUANTITIES[serviceId];
    if (!allowed) return false;
    return allowed.includes(quantity);
}

/**
 * Get display name for a provider.
 */
export function getProviderName(provider: SmmProvider): string {
    switch (provider) {
        case 'SUPPORTIVE': return 'Supportive SMM';
        case 'IND': return 'TNT SMM';
        default: return 'Unknown Provider';
    }
}
