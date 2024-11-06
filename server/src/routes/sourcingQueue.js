const express = require("express");
const { fetchQueueData, login, orderStatus, updateDecision } = require("../controllers/queueController");
const router = express.Router();

router.get("/", fetchQueueData);
router.post("/login", login);
router.post("/orderStatus", orderStatus );
router.post("/updateDecision", updateDecision)


module.exports = router;