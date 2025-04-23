const express = require("express");
const router = express.Router();
const paymentsController = require("../controllers/payments.controller");
const auth = require("../middlewares/auth");

router.post("/payment", paymentsController.getPayment);

module.exports = router;
