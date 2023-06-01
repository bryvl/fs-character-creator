const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema({
    name: String,
    race: String,
    class: String,
    level: Number
});

const Character = mongoose.model('Character', characterSchema);

module.exports = Character;