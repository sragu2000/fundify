// src/middlewares/responseHandlerMiddleware.js
// const AppError = require("../configurations/AppError");
const ResponseHandler = require("../configurations/ResponseHandler");


const responseHandlerMiddleware = (req, res, next) => {
    res.handler = new ResponseHandler(); // Attach to res
    // res.appError = AppError;
    next();
};

module.exports = responseHandlerMiddleware;
