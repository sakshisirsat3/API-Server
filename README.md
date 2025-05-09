**API Server with Authentication and Rate Limiting
This is a containerized API server built with Node.js and Express that includes user authentication and rate-limiting capabilities. It supports user login via JWT authentication and limits request frequency per IP to ensure fair usage and prevent abuse. The app uses Redis for rate-limiting and PostgreSQL for storing user credentials.**

**What does the app do?**
The API server exposes the following functionalities:

User Login: Authenticate users with a username and password and issue a JWT token.

Protected Resource Access: Access protected routes only with a valid JWT token.

Rate Limiting: Enforces a rate limit on the number of requests a user can make within a 60-second window based on their IP address.

**Technologies Used**
Node.js: JavaScript runtime for building the backend server.

Express.js: Web framework for creating and managing the API.

JWT (JSON Web Tokens): Secure authentication method for users via token generation.

Redis: Used for implementing the rate-limiting functionality.

PostgreSQL: Relational database for storing user credentials.

Docker & Docker Compose: For containerization and easy deployment.

dotenv: Manages environment variables like database credentials and JWT secret.
