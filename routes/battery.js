
const express = require('express');
const router = express.Router();
const { getBatteryStatus } = require('../services/batteryService');

router.get('/', (req, res) => {
    res.json(getBatteryStatus());
});

module.exports = router;
