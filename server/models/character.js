const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema({
    name: String,
    race: String,
    path: String,
    level: Number,
    userId: String
});

const Character = mongoose.model('Character', characterSchema);

module.exports = Character;
