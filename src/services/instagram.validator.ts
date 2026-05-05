import { getPlatformNameFromUrl } from '../utils/platform.util';
import { logger } from '../utils/logger';

/**
 * Instagram URL types
 */
export type InstagramLinkType = 'profile' | 'post' | 'reel' | 'unknown';

/**
 * Allowed service categories per link type
 */
export type ServiceCategory =
    | 'followers'
    | 'likes'
    | 'comments'
    | 'views'
    | 'subscribers'
    | 'watchtime'
    | 'members'
    | 'reactions'
    | 'story_views';

const LINK_TYPE_ALLOWED_SERVICES: Record<InstagramLinkType, ServiceCategory[]> = {
    profile: ['followers'],
    post: ['likes', 'comments', 'views'],
    reel: ['likes', 'comments', 'views'],
    unknown: [],
};

/**
 * Detect the type of Instagram URL.
 */
export function detectInstagramLinkType(url: string): InstagramLinkType {
    try {
        const parsed = new URL(url);

        // Must be an Instagram domain
        const hostname = parsed.hostname.replace('www.', '');
        if (hostname !== 'instagram.com') {
            return 'unknown';
        }

        const path = parsed.pathname.replace(/\/+$/, ''); // trim trailing slashes
        const segments = path.split('/').filter(Boolean);

        if (segments.length === 0) {
            return 'unknown';
        }

        // /reel/<id> or /reels/<id>
        if (segments[0] === 'reel' || segments[0] === 'reels') {
            return 'reel';
        }

        // /p/<id>  (post)
        if (segments[0] === 'p') {
            return 'post';
        }

        // /tv/<id> (IGTV — treat as post)
        if (segments[0] === 'tv') {
            return 'post';
        }

        // /<username>  (profile — single segment, not a reserved path)
        const reservedPaths = ['explore', 'accounts', 'about', 'legal', 'developer', 'directory', 'stories'];
        if (segments.length === 1 && !reservedPaths.includes(segments[0])) {
            return 'profile';
        }

        // /<username>/reels or /<username>/tagged etc. — still a profile
        if (segments.length === 2 && !reservedPaths.includes(segments[0])) {
            // If second segment is p or reel, treat accordingly
            if (segments[1] === 'p') return 'post';
            if (segments[1] === 'reel' || segments[1] === 'reels') return 'reel';
            return 'profile';
        }

        return 'unknown';
    } catch {
        logger.warn(`[InstagramValidator] Invalid URL: ${url}`);
        return 'unknown';
    }
}

/**
 * Check if a given service category is allowed for the detected link type.
 */
export function isServiceAllowedForLink(linkType: InstagramLinkType, serviceCategory: ServiceCategory): boolean {
    const allowed = LINK_TYPE_ALLOWED_SERVICES[linkType];
    return allowed.includes(serviceCategory);
}

/**
 * Get allowed service categories for a link type.
 */
export function getAllowedServicesForLink(linkType: InstagramLinkType): ServiceCategory[] {
    return LINK_TYPE_ALLOWED_SERVICES[linkType];
}

/**
 * Validate an Instagram link against a selected service category.
 * Returns an error message if invalid, or null if valid.
 */
export function validateLinkForService(url: string, serviceCategory: ServiceCategory): {
    valid: boolean;
    linkType: InstagramLinkType;
    error?: string;
    allowedServices?: ServiceCategory[];
} {
    const linkType = detectInstagramLinkType(url);
    const platform = getPlatformNameFromUrl(url);

    if (linkType === 'unknown') {
        const errorMsg = platform !== 'Unknown' && platform !== 'Instagram'
            ? `Detected platform: ${platform}. Currently, we only support Instagram services on this platform. Please provide a valid Instagram link.`
            : 'Invalid Instagram URL. Please provide a valid Instagram profile, post, or reel link.';
            
        return {
            valid: false,
            linkType,
            error: errorMsg,
        };
    }

    if (!isServiceAllowedForLink(linkType, serviceCategory)) {
        const allowed = getAllowedServicesForLink(linkType);
        const linkLabel = linkType === 'profile' ? 'profile' : linkType === 'reel' ? 'reel' : 'post';
        return {
            valid: false,
            linkType,
            error: `This is a ${linkLabel} link. Only ${allowed.join(', ')} are available for ${linkLabel} links. You selected "${serviceCategory}".`,
            allowedServices: allowed,
        };
    }

    return { valid: true, linkType };
}
