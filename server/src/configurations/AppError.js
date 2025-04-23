class AppError extends Error {
    constructor(message, statusCode, errors) {
        super(message);
        this.statusCode = statusCode;
        if (errors) {
            this.errors = errors; // keep the original array
        }
        Error.captureStackTrace(this, this.constructor);
    }
}

module.exports = AppError;