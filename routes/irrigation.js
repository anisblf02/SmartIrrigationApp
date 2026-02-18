
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({ message: "Irrigation system running" });
});

module.exports = router;
