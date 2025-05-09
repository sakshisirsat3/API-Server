const jwt = require('jsonwebtoken');

/**
 * Middleware to verify the JWT token and add user info to request object.
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {function} next - The next middleware function
 */
const authMiddleware = (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) return res.status(403).json({ error: 'Access denied' });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(400).json({ error: 'Invalid token' });
    }
};

module.exports = authMiddleware;
