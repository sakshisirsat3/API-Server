API Server with Authentication and Rate Limiting
This project is an API server built with Node.js and Express that includes user authentication and rate-limiting capabilities.

Features
User Authentication: Secure login with JWT-based token generation.

Rate Limiting: Limits the number of requests a user can make in a defined time window.

Error Handling: Global error handler for smooth operation.

Environment Configuration: Uses .env file for sensitive data like JWT secret and database credentials.

Tech Stack
Node.js: JavaScript runtime for building the server.

Express.js: Web framework for building the API.

JWT (JSON Web Token): Used for user authentication.

Redis: Used for implementing rate-limiting.

PostgreSQL: Database for storing user credentials.
