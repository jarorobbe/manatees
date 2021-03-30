const mongoose = require('mongoose');

mongoose.connect('mongodb://defaultManatee:defaultManateePass@192.168.112.2:27017/manatees', {useNewUrlParser: true, useUnifiedTopology: true});

module.exports = mongoose;