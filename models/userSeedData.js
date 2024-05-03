const User = require('../models/user');

// Sample user data
const sampleUsers = [
    { email: 'Nour@gmail.com', password: 'Amal', name: 'Amolah' },
    { email: 'Hadia@gmail.com', password: 'zainb', name: 'Zaynabo' }
];

// Function to seed sample users into the database
async function seedUsers() {
    try {
        // Inserting sample users into the database
        await User.insertMany(sampleUsers);
        console.log('Sample users added successfully');
    } catch (err) {
        console.log('Error adding sample users:', err);
    }
}

module.exports = seedUsers;