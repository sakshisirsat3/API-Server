const express = require('express');
const { resource } = require('../controllers/resourceController');
const authMiddleware = require('../middlewares/authMiddleware');
const rateLimitMiddleware = require('../middlewares/rateLimitMiddleware');

const router = express.Router();

// Apply both authentication and rate-limiting middleware
router.get('/', authMiddleware, rateLimitMiddleware, resource);

module.exports = router;
