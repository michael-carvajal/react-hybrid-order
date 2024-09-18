const express = require("express");
const { fetchQueueData } = require("../controllers/queueController");
const router = express.Router();

router.get("/", fetchQueueData);

module.exports = router;