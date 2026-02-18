
const express = require('express');
const sensorRoutes = require('./routes/sensor');
const batteryRoutes = require('./routes/battery');
const pumpRoutes= require('./routes/pump')

const app = express();
app.use(express.json());

app.use('/sensors', sensorRoutes);
app.use('/battery', batteryRoutes);
app.use('/pump', pumpRoutes);


app.listen(3000, () => {
    console.log("Server running on port 3000");
});
