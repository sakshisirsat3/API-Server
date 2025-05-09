const { Client } = require('pg');
const bcrypt = require('bcryptjs');

const client = new Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: 5432,
});

client.connect();

const findUserByUsername = async (username) => {
    const res = await client.query('SELECT * FROM users WHERE username = $1', [username]);
    return res.rows[0];
};

const createUser = async (username, password) => {
    const hashedPassword = bcrypt.hashSync(password, 10);
    const res = await client.query('INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *', [username, hashedPassword]);
    return res.rows[0];
};

module.exports = { findUserByUsername, createUser };
