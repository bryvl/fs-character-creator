const express = require('express');
const router = express.Router();
const Character = require('../models/character');

// retrieve character from database and attach it to response object
// for access in the DELETE route handler
async function getCharacter(req, res, next) {
    let character;
    try {
        character = await Character.findById(req.params.id);
        if (character == null) {
            return res.status(404).json({ message: 'Cannot find character' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }

    res.character = character;
    next();
}

// Create new character
router.post('/', async (req, res) => {
    const character = new Character({
        name: req.body.name,
        race: req.body.race,
        class: req.body.class,
        level: req.body.level
    });

    try {
        const newCharacter = await character.save();
        res.status(201).json(newCharacter);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});


// Get Routes
router.get('/', async (req, res) => {
    try {
        const characters = await Character.find();
        res.json(characters);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});
router.get('/:id', async (req, res) => {
    try {
        const character = await Character.findById(req.params.id);
        if (character == null) {
            return res.status(404).json({ message: 'Cannot find character' });
        }
        res.json(character);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
});

// Edit specific character
router.patch('/:id', getCharacter, async (req, res) => {
    if (req.body.name != null) {
        res.character.name = req.body.name;
    }
    if (req.body.race != null) {
        res.character.race = req.body.race;
    }
    if (req.body.class != null) {
        res.character.class = req.body.class;
    }
    if (req.body.level != null) {
        res.character.level = req.body.level;
    }
    try {
        const updatedCharacter = await res.character.save();
        res.json(updatedCharacter);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});


router.delete('/:id', async (req, res) => {
    try {
        const character = await Character.findOneAndDelete({ _id: req.params.id });
        if (!character) {
            return res.status(404).json({ message: 'Cannot find character' });
        }
        res.json({ message: 'Deleted Character' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: err.message });
    }
});


module.exports = router;
