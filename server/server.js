const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Create an Express application
const app = express();
app.use(express.json());


// Enable CORS
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost/my_database', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));



// Import Routes
const characterRoutes = require('./routes/characters');

// Use Routes
app.use('/characters', characterRoutes);


// Start the server
const port = 3000; // You can use any port number
app.listen(port, () => console.log(`Server running on port ${port}...`));