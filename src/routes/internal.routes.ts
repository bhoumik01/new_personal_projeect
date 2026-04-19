import { Router } from 'express';
import {
    getCollectionReport,
    createBotOrder,
    getAuthorizedGroups,
    authorizeGroup,
    removeGroup,
    getDashboardStats,
    getOrders,
    getOrder,
    createAdminOrder,
    getSpends,
    createSpend,
    login,
    getFailedOrderMessage,
    upsertFailedOrderMessage,
    removeFailedOrderMessage,
    approveOrderManual,
    getBannersInternal,
    createBannerInternal,
    updateBannerInternal,
    deleteBannerInternal,
    deleteSpend,
    resetPassword,
    getAdmins,
    createAdmin,
    updateAdmin,
    deleteAdmin,
    getSmmConfigs,
    createSmmConfig,
    updateSmmConfig,
    deleteSmmConfig,
} from '../controllers/internal.controller';
import { 
    getServices as getSmmServices, 
    getBalance as getSmmBalances, 
    getSmmOrderStatus 
} from '../controllers/ssm.controller';
import { apiKeyAuth } from '../middleware/apiKeyAuth';

const router = Router();

/**
 * All internal routes are protected by apiKeyAuth.
 * The bot should provide the API_AUTH_KEY in the 'x-api-key' header.
 */
router.use(apiKeyAuth);

/**
 * GET /api/internal/reports/collection
 * Fetch today/yesterday collection reports.
 */
router.get('/reports/collection', getCollectionReport);

/**
 * POST /api/internal/orders/bot
 * Place a direct order from the Telegram bot (free).
 */
router.post('/orders/bot', createBotOrder);

/**
 * GET /api/internal/groups
 * List all authorized Telegram groups.
 */
router.get('/groups', getAuthorizedGroups);

/**
 * POST /api/internal/groups
 * Add or update an authorized Telegram group.
 */
router.post('/groups', authorizeGroup);

/**
 * DELETE /api/internal/groups/:chatId
 * Remove an authorized Telegram group.
 */
router.delete('/groups/:chatId', removeGroup);

/**
 * GET /api/internal/stats
 */
router.get('/stats', getDashboardStats);

/**
 * GET /api/internal/orders
 */
router.get('/orders', getOrders);

/**
 * GET /api/internal/orders/:id
 */
router.get('/orders/:id', getOrder);

/**
 * POST /api/internal/orders
 */
router.post('/orders', createAdminOrder);

/**
 * GET /api/internal/spends
 */
router.get('/spends', getSpends);

/**
 * POST /api/internal/spends
 */
router.post('/spends', createSpend);

/**
 * DELETE /api/internal/spends/:id
 */
router.delete('/spends/:id', deleteSpend);

/**
 * POST /api/internal/auth/login
 */
router.post('/auth/login', login);

/**
 * POST /api/internal/auth/reset-password
 */
router.post('/auth/reset-password', resetPassword);

/**
 * Admin Management
 */
router.get('/admins', getAdmins);
router.post('/admins', createAdmin);
router.patch('/admins/:id', updateAdmin);
router.delete('/admins/:id', deleteAdmin);

/**
 * Failed Order Message Management
 */
router.get('/failed-orders/message/:messageId', getFailedOrderMessage);
router.post('/failed-orders/message', upsertFailedOrderMessage);
router.delete('/failed-orders/message/:messageId', removeFailedOrderMessage);

/**
 * Manual Order Approval
 */
router.post('/orders/:id/approve-manual', approveOrderManual);

/**
 * GET /api/internal/ssm/balance
 * Check all SMM panel balances.
 */
router.get('/ssm/balance', getSmmBalances);

/**
 * GET /api/internal/ssm/services
 */
router.get('/ssm/services', getSmmServices);

/**
 * GET /api/internal/ssm/orders/:smmOrderId/status
 */
router.get('/ssm/orders/:smmOrderId/status', getSmmOrderStatus);

/**
 * Banner Management
 */
router.get('/banners', getBannersInternal);
router.post('/banners', createBannerInternal);
router.patch('/banners/:id', updateBannerInternal);
router.delete('/banners/:id', deleteBannerInternal);

/**
 * SMM Configuration Management
 */
router.get('/smm-configs', getSmmConfigs);
router.post('/smm-configs', createSmmConfig);
router.patch('/smm-configs/:id', updateSmmConfig);
router.delete('/smm-configs/:id', deleteSmmConfig);

export default router;
