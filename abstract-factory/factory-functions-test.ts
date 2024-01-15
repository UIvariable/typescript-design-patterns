import { createLogger } from "./factory-functions";

const logger = createLogger();

logger.debug('debug message');
logger.info('info message');
logger.warn('warning message');
logger.error('error message');