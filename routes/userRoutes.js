const express = require('express');
const router = express.Router();
const { logIn } = require('../services/userService');

// Sign-in endpoint
//router.post('/signin', userController.signIn);
router.post('/login', logIn);

module.exports = router;
