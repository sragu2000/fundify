const { app } = require("./app");
const errorHandler = require("./src/middlewares/errorHandler");

// Import routes
app.use("/api", require("./src/routes/user.routes"));
app.use("/api", require("./src/routes/sample.routes"));


// Always add the error handler middleware at the end of the middleware stack
app.use(errorHandler);
