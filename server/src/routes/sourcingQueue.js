const express = require("express");
const { fetchQueueData, login } = require("../controllers/queueController");
const router = express.Router();

router.get("/", fetchQueueData);
router.post("/login", login);


module.exports = router;