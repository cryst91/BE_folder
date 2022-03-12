const express = require("express");
const router = express.Router();
const createClass = require("./create.classController");
const updateClass = require("./update.classController");
const deleteClass = require("./delete.classController");

router.post("/", createClass.service);
router.put("/:id", updateClass.service);
router.delete("/:id", deleteClass.service);

module.exports = router;


