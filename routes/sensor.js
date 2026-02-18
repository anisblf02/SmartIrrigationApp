
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        soilMoisture: "40%",
        temperature: "27°C",
        humidity: "60%",
        status: "Optimal"
    });
});

module.exports = router;
