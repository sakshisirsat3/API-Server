**This project is an API server built with Node.js and Express that includes user authentication and rate-limiting capabilities.**

**Features**
User Authentication: Secure login system that issues JWT tokens for user authentication.

Rate Limiting: Limits the number of requests from a single user within a defined time window, ensuring fair usage and protecting against abuse.

Error Handling: A global error handler that manages any issues smoothly, offering clear error responses.

Environment Configuration: Sensitive data such as JWT secret and database credentials are stored in a .env file for security and easy configuration.

**Tech Stack**
Node.js: The JavaScript runtime environment to build the API server.

Express.js: The web framework for building and handling HTTP requests.

JWT (JSON Web Tokens): For securely authenticating users and generating tokens for access.

Redis: Provides fast and efficient rate limiting, tracking user requests.

PostgreSQL: The database for securely storing user credentials and managing user-related data.
