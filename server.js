const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const seedUsers = require('./models/userSeedData');
const asyncHndler = require('express-async-handler');

//connecting with mongoose
//mongoose.connect("mongodb://localhost:27017/project")
mongoose.connect("mongodb://127.0.0.1:27017/project")
    .then(() => {
        console.log('Connected to MongoDB');

        // Seed sample users into the database
        seedUsers();
    })
    .catch(err => console.log("can not connected:", err))



const app = express();

// Middleware to parse JSON
app.use(express.json());

// User routes
app.use('/users', userRoutes);

//establishing server on the port
const port = 3000;
app.listen(port, function () {
    console.log(`server estaplished successfully on port ${port}`);
})