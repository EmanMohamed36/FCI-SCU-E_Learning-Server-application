const mongoose = require("mongoose");

// Define a mongoose schema for your user
const userSchema = new mongoose.Schema({
    email: String,
    password: String,
    name: String
});
  
  // Create a mongoose model
module.exports = mongoose.model('User', userSchema);
