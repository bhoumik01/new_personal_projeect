import { SmmProvider } from '../../generated/prisma/index.js';
import { ServiceCategory } from '../services/instagram.validator';
import fs from 'fs';
import path from 'path';

// ─────────────────────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────────────────────

interface ServiceIdEntry {
    id: number;
    name: string;
    provider: string;       // e.g. 'IND', 'SUPPORTIVE'
    category: string;       // e.g. 'followers', 'likes'
    platform: string;       // e.g. 'instagram'
    allowedQuantities: number[];
    description?: string;
}

interface ServiceIdsFile {
    serviceIds: ServiceIdEntry[];
    updatedAt: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// Live JSON loader — reads from data/service-ids.json on every access
// so admin changes take effect without restarting the server.
// ─────────────────────────────────────────────────────────────────────────────

const SERVICE_IDS_FILE = path.resolve(process.cwd(), 'data/service-ids.json');

function loadServiceEntries(): ServiceIdEntry[] {
    try {
        const raw = fs.readFileSync(SERVICE_IDS_FILE, 'utf-8');
        const parsed = JSON.parse(raw) as ServiceIdsFile;
        return parsed.serviceIds ?? [];
    } catch {
        // Fallback to hardcoded entries if file is missing / corrupt
        return [
            { id: 10183, name: 'Followers',  provider: 'IND',        category: 'followers', platform: 'instagram', allowedQuantities: [50, 100, 200] },
            { id: 12587, name: 'Likes',      provider: 'IND',        category: 'likes',     platform: 'instagram', allowedQuantities: [1000] },
            { id: 602,   name: 'Reel Views', provider: 'SUPPORTIVE', category: 'views',     platform: 'instagram', allowedQuantities: [5000, 10000, 25000] },
            { id: 670,   name: 'Comments',   provider: 'SUPPORTIVE', category: 'comments',  platform: 'instagram', allowedQuantities: [100] },
        ];
    }
}

// ─────────────────────────────────────────────────────────────────────────────
// Public helpers — build maps on demand so they always reflect the latest JSON
// ─────────────────────────────────────────────────────────────────────────────

function buildProviderMap(): Record<number, SmmProvider> {
    const entries = loadServiceEntries();
    const map: Record<number, SmmProvider> = {};
    for (const e of entries) {
        map[e.id] = e.provider as SmmProvider;
    }
    return map;
}

function buildNameMap(): Record<number, string> {
    const entries = loadServiceEntries();
    const map: Record<number, string> = {};
    for (const e of entries) {
        map[e.id] = e.name;
    }
    return map;
}

function buildCategoryMap(): Record<number, ServiceCategory> {
    const entries = loadServiceEntries();
    const map: Record<number, ServiceCategory> = {};
    for (const e of entries) {
        map[e.id] = e.category as ServiceCategory;
    }
    return map;
}

function buildAllowedQuantitiesMap(): Record<number, number[]> {
    const entries = loadServiceEntries();
    const map: Record<number, number[]> = {};
    for (const e of entries) {
        map[e.id] = e.allowedQuantities;
    }
    return map;
}

// ─────────────────────────────────────────────────────────────────────────────
// Exported functions (same API as before — no callers need to change)
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Determines the SMM Provider for a given Service ID.
 * Reads live from service-ids.json. Defaults to SUPPORTIVE if not found.
 */
export function getProviderForService(serviceId: number): SmmProvider {
    return buildProviderMap()[serviceId] ?? 'SUPPORTIVE';
}

/**
 * Gets the display name for a given Service ID.
 */
export function getServiceNameForId(serviceId: number): string | null {
    return buildNameMap()[serviceId] ?? null;
}

/**
 * Gets the service category for a given Service ID.
 */
export function getCategoryForId(serviceId: number): ServiceCategory | null {
    return buildCategoryMap()[serviceId] ?? null;
}

/**
 * Checks if a given quantity is in the allowed list for a Service ID.
 */
export function isValidQuantity(serviceId: number, quantity: number): boolean {
    const allowed = buildAllowedQuantitiesMap()[serviceId];
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

/**
 * Returns all service ID entries from the JSON file.
 * Useful for admin APIs and reporting.
 */
export function getAllServiceEntries(): ServiceIdEntry[] {
    return loadServiceEntries();
}
