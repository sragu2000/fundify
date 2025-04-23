const ResponseHandler = require("../configurations/ResponseHandler");

const errorHandler = (err, req, res, next) => {
    let { statusCode = 500, message = "Internal Server Error" } = err;

    // for the errors that are not handled by the app ==> when error is from catch
    if (err.name === "ValidationError") {
        statusCode = 400;
        message = "Validation Error";
    }

    if (err.name === "CastError") {
        statusCode = 400;
        message = `Invalid value for ${err.path}: ${err.value}`;
    }
    // end of the errors that are not handled by the app

    const response = new ResponseHandler()
        .setMessage(message)
        .setError(err.errors || null)

    res.status(statusCode).json(response);
};

module.exports = errorHandler;
