const express = require("express");
const router = express.Router();
const sampleController = require("../controllers/sample.controller");
const auth = require("../middlewares/auth");

router.get("/sample", auth.validateToken(["admin", "fundraiser"]), sampleController.sampleProtectedRoute);

module.exports = router;
