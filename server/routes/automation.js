// src/routes/automation.js
const express = require('express');
const { runAutomation } = require('../controllers/automationController');
const router = express.Router();

router.post('/run', runAutomation);

module.exports = router;
