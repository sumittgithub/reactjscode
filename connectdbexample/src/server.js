// server.js

const express = require('express');
const mysql = require('mysql');

const app = express();
const PORT = process.env.PORT || 5000;

// Create MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'demos'
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connected to MySQL database');
});

// API endpoint to fetch data from MySQL
app.get('/api/data', (req, res) => {
  const sql = 'SELECT * FROM item';
  db.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    res.json(result);
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
