import { db } from "../dbconnection.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

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

    const salt = bcrypt.genSaltSync(10);
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

export const login = (req, res) => {
  const q = "SELECT * FROM users WHERE username=?";
  db.query(q, [req.body.username], (err, data) => {
    if (err) return res.json(err);
    if (data.length === 0) return res.status(404).json("User not fount!");
    //check password
    const isPasswordCorrect = bcrypt.compareSync(
      req.body.password,
      data[0].password
    );

    if (!isPasswordCorrect) {
      console.error("Wrong username or password!");
      return res.status(400).json("Wrong username or password!");
    }

    const token = jwt.sign({ id: data[0].id }, "jwtkey");

    if (!token) {
      console.error("Error generating JWT");
      return res.status(500).json("Internal Server Error");
    }

    const { password, ...other } = data[0];

    console.log("Login successful! User:", other);

    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json(other);
  });
};
export const logout = (req, res) => {
  res
    .clearCookie("access_token", {
      sameSite: "none",
      secure: true,
    })
    .status(200)
    .json("user has been logged out.");
};
