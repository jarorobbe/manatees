const mongoose = require('mongoose');
mongoose.connect('mongodb://jaror:jarorsecretpass@localhost:27017/manatees', {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;

module.exports = db;