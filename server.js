const express = require('express');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const resourceRoutes = require('./routes/resourceRoutes');
const { errorHandler } = require('./utils/logger');

dotenv.config(); // Load environment variables

const app = express();
app.use(express.json());  // Middleware to parse JSON bodies

// Register routes
app.use('/auth', authRoutes);
app.use('/resource', resourceRoutes);

// Global error handler
app.use(errorHandler);

// Graceful shutdown
process.on('SIGINT', () => {
    console.log('Gracefully shutting down...');
    server.close(() => {
        console.log('Server closed');
        process.exit(0);
    });
});

// Start the server
const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
