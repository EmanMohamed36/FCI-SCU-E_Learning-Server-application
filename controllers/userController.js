const User = require('../models/user');

async function signIn(req, res) {
    const { email, password } = req.body;

    try {
        // Check if the user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Check if the password is correct
        if (user.password !== password) {
            return res.status(401).json({ error: 'Incorrect password' });
        }

        // If everything is correct, send back user data
        res.json({ user });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = {
    signIn
};
