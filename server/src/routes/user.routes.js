const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
const auth = require("../middlewares/auth");

router.post("/user/register", userController.registerUser);

router.post("/user/login", userController.loginUser);

router.get("/user/*", (req, res) => {
    res.status(404).json({ error: "Resource not found" });
});

module.exports = router;
