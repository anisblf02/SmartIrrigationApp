const express = require('express');
const router = express.Router();

/**
 * GET /pump
 * Returns current water pump status
 */
router.get('/', (req, res) => {
    res.json({
        pumpId: 1,
        status: "ON",
        flowRate: "12 L/min",
        lastActivation: "2026-03-15 10:30",
        mode: "AUTOMATIC"
    });
});

/**
 * POST /pump/start
 * Start the water pump
 */
router.post('/start', (req, res) => {
    res.json({
        message: "Water pump started successfully",
        status: "ON"
    });
});

/**
 * POST /pump/stop
 * Stop the water pump
 */
router.post('/stop', (req, res) => {
    res.json({
        message: "Water pump stopped successfully",
        status: "OFF"
    });
});

module.exports = router;
