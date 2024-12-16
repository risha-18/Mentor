const mysql = require('mysql2');
const dotenv = require('dotenv');
dotenv.config();  // Load the .env file

// MySQL connection
const pool = mysql.createPool({
  host: process.env.DB_HOST,       // localhost (or the host where your MySQL is running)
  user: process.env.DB_USER,       // root (or your MySQL username)
  password: process.env.DB_PASSWORD, // your MySQL password
  database: process.env.DB_NAME    // your database name, e.g., 'connectify'
});

// Export a promise-based pool
const db = pool.promise();

module.exports = db;