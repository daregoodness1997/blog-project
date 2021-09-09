const express = require('express');
const { registerUser } = require('../controllers');
const router = express.Router();

// REGISTER
router.post('/register', registerUser);

// Login

module.exports = router;
