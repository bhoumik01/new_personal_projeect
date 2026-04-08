import { Request, Response, NextFunction } from 'express';
import { logger } from '../utils/logger';

/**
 * Middleware to track request duration and log slow operations.
 */
export function requestTimer(req: Request, res: Response, next: NextFunction): void {
    const start = process.hrtime();
    const startTime = Date.now();

    // Log the incoming request
    logger.debug(`[RequestStart] ${req.method} ${req.originalUrl}`);

    res.on('finish', () => {
        const diff = process.hrtime(start);
        const durationMs = (diff[0] * 1000 + diff[1] / 1e6).toFixed(2);
        const statusCode = res.statusCode;

        const logMsg = `${req.method} ${req.originalUrl} - ${statusCode} - ${durationMs}ms`;

        if (parseFloat(durationMs) > 2000) {
            logger.warn(`[SlowRequest] ${logMsg}`);
        } else {
            logger.debug(`[RequestEnd] ${logMsg}`);
        }

        // Add a header to the response (optional, good for debugging)
        // res.setHeader('X-Response-Time', `${durationMs}ms`);
    });

    next();
}
