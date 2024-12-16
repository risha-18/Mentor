const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const db = require('../database');

// Signup Route
router.post('/signup', async (req, res) => {
  const { first_name, last_name, date_of_birth, username, email, password } = req.body;

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    await db.execute(
      `INSERT INTO users (first_name, last_name, date_of_birth, username, email, password) VALUES (?, ?, ?, ?, ?, ?)`,
      [first_name, last_name, date_of_birth, username, email, hashedPassword]
    );
    res.status(201).json({ message: 'User registered successfully!' });
  } catch (err) {
    console.error(err);
    if (err.code === 'ER_DUP_ENTRY') {
      res.status(409).json({ error: 'Username or Email already exists.' });
    } else {
      res.status(500).json({ error: 'Failed to register user.' });
    }
  }
});

module.exports = router;