const mongoose = require('mongoose');
const { Schema } = mongoose;

const championSchema = new Schema({
    name: String,
    faction: String,
    age: Number
});