const User = require('../models/user');

// Sample user data
const sampleUsers = [
    { email: 'user1@example.com', password: 'password1', name: 'User One' },
    { email: 'user2@example.com', password: 'password2', name: 'User Two' },
    { email: 'user3@example.com', password: 'password3', name: 'User Three' }
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