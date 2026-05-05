import { Router } from 'express';
import {
    createOrder,
    getOrder,
    getOrders,
    validateLink,
    createOrderSchema,
    validateLinkSchema,
} from '../controllers/order.controller';
import { validate } from '../middleware/validate';
import { apiKeyAuth } from '../middleware/apiKeyAuth';

const router = Router();

/**
 * POST /api/orders/validate-link
 * Validate an Instagram link against a service category (public).
 */
router.post('/validate-link', validate(validateLinkSchema), validateLink);

/**
 * POST /api/orders
 * Create a new SMM order (public — customer-facing).
 */
router.post('/', validate(createOrderSchema), createOrder);

/**
 * GET /api/orders
 * List all orders with pagination (admin only).
 */
router.get('/', apiKeyAuth, getOrders);

/**
 * GET /api/orders/:id
 * Get single order with full details (public — for status tracking).
 */
router.get('/:id', getOrder);

export default router;
