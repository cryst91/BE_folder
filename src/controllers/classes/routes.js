const express = require("express");
const router = express.Router();
const createClass = require("./create.classController");

router.post("/", createClass.service);

module.exports = router;
