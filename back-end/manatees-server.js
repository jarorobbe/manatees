import { createRequire } from 'module';
const require = createRequire(import.meta.url);

import db from './models/config.js';
import { championRouter } from './routes/champion.routes.js';

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const server = express();

const hostname = '127.0.0.1';
const port = 5000;

var corsOption = {
    origin: "http:/" + hostname + ":" + port
};

server.use(cors(corsOption));

// Parse request of content-type - application/json
server.use(bodyParser.json());

// Parse requests of content-type - application/x-www-form-urlencoded
server.use(bodyParser.urlencoded({ extended: true }));

// Add routers to the application
server.use('/api/champions', championRouter);

// Home route
server.get("/", (req, res) => {
    res.json({ message: 'Welcome to my server!'});
});

// Listen for requests
server.listen(port, () => {
    console.log('Server is running on ', 'http://' + hostname + ':' + port);
});

// Database
db.sequelize.sync();
