import { LoggerFactory } from "./factory-class";

const logger = LoggerFactory.createLogger();

logger.debug('debug message');
logger.info('info message');
logger.warn('warning message');
logger.error('error message');