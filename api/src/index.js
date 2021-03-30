const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const championRouter = require('./routes/championRoutes');

const app = express();
const port = process.env.PORT ? process.env.PORT : 3001;

app.use(cors());
app.use('/api/champion', championRouter);

app.listen(port, () => {
    console.log(`Manatees API running at localhost:${port}`);
});