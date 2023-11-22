import { db } from "../dbconnection.js";
import bcrypt from "bcrypt"; // Assuming you have the bcrypt library installed

export const register = (req, res) => {
  // Check existing user
  const selectQuery = "SELECT * FROM users WHERE email = ? OR username = ?";
  db.query(selectQuery, [req.body.email, req.body.username], (err, data) => {
    if (err) {
      return res.status(500).json({ error: "Internal Server Error" });
    }

    if (data.length) {
      return res.status(409).json({ error: "User already exists!" });
    }

    // Hash the password and create a user
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const insertQuery =
      "INSERT INTO users (`username`, `email`, `password`) VALUES (?, ?, ?)";
    const insertValues = [req.body.username, req.body.email, hash];

    db.query(insertQuery, insertValues, (err, data) => {
      if (err) {
        return res.status(500).json({ error: "Internal Server Error" });
      }

      return res.status(200).json({ data });
    });
  });
};

export const login = (req, res) => {};
export const logout = (req, res) => {};
