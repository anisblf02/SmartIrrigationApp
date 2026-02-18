
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({
<<<<<<< HEAD
	status: "active"
        soilMoisture: "40%",
        temperature: "27°C",
        humidity: "60%",
    });
});

module.exports = router;
