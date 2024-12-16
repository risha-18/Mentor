const db = require('../database');

// Create the `users` table (run this once)
async function createUserTable() {
  try {
    await db.execute(`
      CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        first_name VARCHAR(100),
        last_name VARCHAR(100),
        date_of_birth DATE,
        username VARCHAR(50) UNIQUE,
        email VARCHAR(100) UNIQUE,
        password VARCHAR(255)
      )
    `);
    console.log('Users table created successfully.');
  } catch (err) {
    console.error('Error creating Users table:', err);
  }
}

createUserTable();