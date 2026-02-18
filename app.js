
const express = require('express');
const irrigationRoutes = require('./routes/irrigation');

const app = express();
app.use(express.json());

app.use('/irrigation', irrigationRoutes);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
