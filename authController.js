const { authenticateUser } = require('../services/authService');

/**
 * Login route controller
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const token = await authenticateUser(username, password);
        res.json({ token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { login };
