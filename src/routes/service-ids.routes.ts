import { Router } from 'express';
import { getServiceIdMap, getServiceIds } from '../controllers/internal.controller';

const router = Router();

/**
 * GET /api/service-ids
 * Public endpoint — no auth required.
 * Returns the list of SMM service IDs with their names, providers,
 * categories, platforms, and allowed quantities.
 * Used by the main frontend (SocialBoost) to resolve service IDs dynamically.
 */
router.get('/', getServiceIds);
router.get('/map', getServiceIdMap);

export default router;
