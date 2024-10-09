const express = require("express");
const { fetchQueueData, login, orderStatus } = require("../controllers/queueController");
const router = express.Router();

router.get("/", fetchQueueData);
router.post("/login", login);
router.post("/orderStatus", orderStatus );


module.exports = router;