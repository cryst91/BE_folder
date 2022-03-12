const express = require("express");
const router = express.Router();
const createClass = require("./create.classController");
const updateClass = require("./update.classController");

router.post("/", createClass.service);
router.put("/:id", updateClass.service);

module.exports = router;
