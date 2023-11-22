import { db } from "../dbconnection.js";
import bcrypt from "bcrypt";
export const register = (req, res) => {
  //check existing user

  const q = "SELECT * FROM users WHERE email= ? OR username= ?";
  db.query(q, [req.body.email, req.body.name], (err, data) => {
    if (err) return res.json(err);
    if (data.length) return res.status(409).json("user already exists!");

    //Hash the password and create a user
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const q = "INSERT INTO users (`username`,`email`,`password`) VALUES (?)";
    const values = [req.body.username, req.body.email, hash];
    db.query(q, [values], (err, data) => {
      if (err) return res.json(err);
      return res.json(200).json("user has been created");
      console.log(data);
    });
  });
};

export const login = (req, res) => {};
export const logout = (req, res) => {};
