import winston from 'winston';
import * as HyperDX from '@hyperdx/node-opentelemetry';
import util from 'util';

/**
 * Winston logger configuration with HyperDX transport.
 * This sends logs to both the console and the HyperDX dashboard.
 */
const winstonLogger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
    ),
    transports: [
        new winston.transports.Console({
            format: winston.format.combine(
                winston.format.colorize(),
                winston.format.printf(({ level, message, timestamp, ...metadata }) => {
                    let msg = `${timestamp} [${level}]: ${message}`;
                    if (Object.keys(metadata).length > 0) {
                        msg += ` ${util.inspect(metadata, { depth: 2, colors: false, breakLength: Infinity })}`;
                    }
                    return msg;
                })
            )
        }),
        HyperDX.getWinstonTransport('info', {
            detectResources: true,
        }),
    ],
});

// Maintain the same interface to keep compatibility with existing code
export const logger = {
    info: (message: string, ...args: any[]) => {
        winstonLogger.info(message, ...args);
    },
    success: (message: string, ...args: any[]) => {
        // Winston doesn't have a 'success' level by default, mapping to info
        winstonLogger.info(`✅ ${message}`, ...args);
    },
    warn: (message: string, ...args: any[]) => {
        winstonLogger.warn(message, ...args);
    },
    error: (message: string, ...args: any[]) => {
        winstonLogger.error(message, ...args);
    },
    debug: (message: string, ...args: any[]) => {
        winstonLogger.debug(message, ...args);
    },
};
