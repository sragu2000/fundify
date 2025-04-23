const express = require("express");
const router = express.Router();
const causesController = require("../controllers/causes.controller");
const auth = require("../middlewares/auth");

router.get("/causes", auth.validateToken(["admin"]), causesController.getAllCauses);
router.get("/cause/:causeId", auth.validateToken(["admin"]), causesController.getCauseById);
router.post("/causes", auth.validateToken(["admin"]), causesController.createCause);
router.put("/causes", auth.validateToken(["admin"]), causesController.updateCause);
router.delete("/causes", auth.validateToken(["admin"]), causesController.deleteCause);

module.exports = router;
