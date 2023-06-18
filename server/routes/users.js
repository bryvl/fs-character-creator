const express = require('express');
const router = express.Router();
const User = require('../models/user');

// Retrieve all users
router.get('/', async (req, res) => {
    try {
      const users = await User.find(); // This line assumes you have a User model defined
      res.json(users);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  

// Register user
router.post('/register', async (req, res) => {
  console.log('hello I am being hit at /register');
  const { username, password } = req.body;

  // Check if the username already exists
  let user = await User.findOne({ username });
  if (user) return res.status(400).send('Username already exists');

  user = new User({ username, password });

  await user.save();

  res.send({ user: user._id });
});

// Login user
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  // Check if the user exists
  const user = await User.findOne({ username });
  if (!user) return res.status(400).send('Invalid username or password');

  // Check if the password is correct
  const validPassword = await user.isValidPassword(password);
  if (!validPassword) return res.status(400).send('Invalid username or password');

  res.send({ user: { _id: user._id, username: user.username}});
});

module.exports = router;