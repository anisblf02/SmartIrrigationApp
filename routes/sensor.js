
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        soilMoisture: "45%",
        temperature: "28°C"
	status: "active"
    });
});

module.exports = router;
