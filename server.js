const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');

//connecting with mongoose
mongoose.connect("mongodb://localhost:27017/project")
    .then(() => console.log('connected successfuly'))
    .catch(err => console.log("can not connected:", err))



const app = express();

// Middleware to parse JSON
app.use(express.json());

// User routes
app.use('/api/users', userRoutes);

//establishing server on the port
const port = 3000
app.listen(port, function () {
    console.log(`server estaplished successfully on port ${port}`);
})