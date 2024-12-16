const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const db = require('./database'); // Import database connection

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(express.static('public')); // Serve frontend files

// Routes
app.use('/api/auth', authRoutes);

// Check MySQL connection on server startup
db.getConnection()
  .then((connection) => {
    console.log("Connected to MySQL database!");
    connection.release(); // Release the connection back to the pool
  })
  .catch((err) => {
    console.error("Error connecting to MySQL database:", err.message);
  });

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});