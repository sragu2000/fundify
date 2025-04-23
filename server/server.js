const { app } = require("./app");
const errorHandler = require("./src/middlewares/errorHandler");
const responseHandlerMiddleware = require("./src/middlewares/responseHandler");

// Attach ResponseHandler to res object
app.use(responseHandlerMiddleware);

// Import routes
app.use("/api", require("./src/routes/user.routes"));
app.use("/api", require("./src/routes/sample.routes"));
app.use("/api", require("./src/routes/causes.routes"));
app.use("/api", require("./src/routes/payments.routes"));


// Always add the errorHandler middleware at the end of the middleware stack
app.use(errorHandler);
