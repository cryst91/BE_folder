const express = require("express");
const router = express.Router();
const createClass = require("./create.classController");
const updateClass = require("./update.classController");
const deleteClass = require("./delete.classController");
const readClass = require("./read.classController");
const


router.post("/", createClass.service);
router.put("/:id", updateClass.service);
router.delete("/:id", deleteClass.service);
router.get("/", readClass.service);
router.get("/:id/")

module.exports = router;


// {
//     "name": "Kelas Fullstack Shift Academy",
//     "description": "kelas fullstack materi backend fundamental",
//     "dateFrom": "2022-06-01",
//     "dateTo": "2022-09-30"
// }
