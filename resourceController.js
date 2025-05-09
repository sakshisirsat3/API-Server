/**
 * Resource route controller
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
const resource = (req, res) => {
    res.json({ message: 'You have access to this protected resource!', user: req.user });
};

module.exports = { resource };
