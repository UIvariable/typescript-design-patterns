interface ILogger {
    info(message: string): void;
    debug(message: string): void;
    warn(message: string): void;
    error(message: string): void;
}

const productionLogger = () : ILogger => ({
    info(message: string): void {},
    debug(message: string): void {},
    warn(message: string): void {
        console.warn(message);
    },
    error(message: string): void {
        console.error(message);
    },
});

const developmentLogger = () : ILogger => ({
    info(message: string): void {
        console.log(message);
    },
    debug(message: string): void {
        console.debug(message);
    },
    warn(message: string): void {
        console.warn(message);
    },
    error(message: string): void {
        console.error(message);
    },
});

export const createLogger = () : ILogger => {
    console.log(process.env.NODE_ENV);
    if (process.env.NODE_ENV === 'production') {
        return productionLogger();
    } else {
        return developmentLogger();
    }
}
