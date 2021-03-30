const mongoose = require('../connection');
const { Schema } = mongoose;

const championSchema = new Schema({
    name: String,
    alias: String,
    faction: String,
    description: String,
    role: String,
    abilities: {
        Passive: String,
        Q: String,
        W: String,
        E: String,
        R: String
    },
    image: String
});

const Champion = mongoose.model('Champion', championSchema);

module.exports = Champion;