const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");
const { CONFIG_PORT, CONFIG_DATABASE } = require("./config");
const mongoose = require("mongoose");

app.use(
  cors({
    origin: [
      "http://localhost:3000",
    ],
    methods: "GET,POST,PUT,DELETE,OPTIONS",
  })
);

app.get("/", (req, res) => {
  res.status(200).json({ status: true });
});

app.listen(CONFIG_PORT || 8000, () => {
  console.log(`Server started on port ${CONFIG_PORT || 8001}`);
  mongoose
    .connect(CONFIG_DATABASE.uri)
    .then(() => {
      console.log("mongoDB connected successfully");
    })
    .catch((e) => {
      console.log({
        message: "something went wrong connecting to the database server",
        error: e,
      });
    });
});



module.exports = {
  app
}