const express = require('express');
const mongoose = require('mongoose');

const championRouter = require('./routes/championRoutes');

const app = express();
const port = process.env.PORT ? process.env.PORT : 3001;

mongoose.connect('mongodb://defaultManatee:defaultManateePass@192.168.112.2:27017/manatees', {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;

app.use('/champion', championRouter);

app.listen(port, () => {
    console.log(`Manatees API running at localhost:${port}`);
});