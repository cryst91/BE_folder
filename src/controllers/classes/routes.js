const express = require("express");
const router = express.Router();
const createClass = require("./create.classController");
const updateClass = require("./update.classController");
const deleteClass = require("./delete.classController");
const readClass = require("./read.classController");
const readWithSession = require("./readWithSession.classController");

router.post("/", createClass.service);
router.put("/:id", updateClass.service);
router.delete("/:id", deleteClass.service);
router.get("/sessions", readWithSession.service);
router.get("/:id", readClass.service);
router.get("/", readClass.service);

module.exports = router;
