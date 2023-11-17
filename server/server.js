const express = require("express");
const bodyParser = require("body-parser");
const db = require("./dbconnection");

const app = express();
app.use(bodyParser.json());
app.use(express.json());

app.post("/register", (req, res) => {
  const { username, password } = req.body;
  // Perform MySQL INSERT query to register the user
  const query = "INSERT INTO users (username, password) VALUES (?, ?)";
  db.query(query, [username, password], (err, result) => {
    if (err) {
      console.error("Error registering user:", err);
      res.status(500).send("Registration failed");
    } else {
      res.status(200).send("Registration successful");
    }
  });
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  // Perform MySQL SELECT query to verify login credentials
  const query = "SELECT * FROM users WHERE username = ? AND password = ?";
  db.query(query, [username, password], (err, results) => {
    if (err) {
      console.error("Error verifying login:", err);
      res.status(500).send("Login failed");
    } else {
      if (results.length > 0) {
        res.status(200).send("Login successful");
      } else {
        res.status(401).send("Invalid credentials");
      }
    }
  });
});

const port = 8800;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
