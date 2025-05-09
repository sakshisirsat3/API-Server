const { checkRateLimit } = require('../services/rateLimitService');

/**
 * Middleware to check rate limit for requests from a specific IP address.
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {function} next - The next middleware function
 */
const rateLimitMiddleware = async (req, res, next) => {
    try {
        const ip = req.ip;
        await checkRateLimit(ip);
        next();
    } catch (error) {
        res.status(429).json({ error: 'Rate limit exceeded' });
    }
};

module.exports = rateLimitMiddleware;
