const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const characterRoutes = require('./routes/characters');
const userRoutes = require('./routes/users')

// Create an Express application
const app = express();
app.use(express.json());

// Enable CORS
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb+srv://redhuskyventures:1ces7bjRBqefPKML@darkseasdemo.wu3zgku.mongodb.net/?retryWrites=true&w=majority', 
{ useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

// Use Routes
app.use('/characters', characterRoutes);
app.use('/users', userRoutes);

// Start the server
const port = 3000; // You can use any port number
app.listen(port, () => console.log(`Server running on port ${port}...`));