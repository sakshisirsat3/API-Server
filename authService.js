const jwt = require('jsonwebtoken');
const { findUserByUsername } = require('../models/usermodel');
const bcrypt = require('bcryptjs');

/**
 * Authenticates the user by verifying credentials and generating JWT.
 * @param {string} username - The username of the user
 * @param {string} password - The password of the user
 * @returns {string} JWT token
 */
const authenticateUser = async (username, password) => {
    const user = await findUserByUsername(username);
    if (!user) {
        throw new Error('Invalid username or password');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        throw new Error('Invalid username or password');
    }

    const token = jwt.sign(
        { userId: user.id, username: user.username },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
    );

    return token;
};

module.exports = { authenticateUser };
