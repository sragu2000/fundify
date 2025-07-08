const express = require("express");
const router = express.Router();
const payhereController = require("../controllers/payhere.controller");
const auth = require("../middlewares/auth");

router.post("/payhere-notify-web-hook", payhereController.payhereNotifyWebhook);
router.post("/generate-payhere-hash", payhereController.generatePayhereHash);
// router.post("/payhere-refund", payhereController.generatePayhereHash);

module.exports = router;
