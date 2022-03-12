const express = require("express");
const router = express.Router();

const registerUser = require("./register.userController");

router.post("/register", registerUser.service);

module.exports = router;
