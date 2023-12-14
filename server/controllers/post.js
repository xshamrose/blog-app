import { db } from "../dbconnection.js";

export const getPosts = (req, res) => {
  const q = req.query.cat
    ? "SELECT * FROM post WHERE cat=?"
    : "SELECT * FROM post";
  db.query(q, [req.query.cat], (err, data) => {
    if (err) return res.send(err);
    return res.status(200).json(data);
  });
};
export const getPost = (req, res) => {
  const q =
    "SELECT `username`,`title`,`descp`, p.img AS postImg, u.img AS userImg,`cat`,`date` FROM users u JOIN post p ON u.id=p.id WHERE p.id=?";
  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.status(200).json(data[0]);
  });
};
export const addPost = (req, res) => {
  res.json("from controller");
};
export const deletePost = (req, res) => {
  res.json("from controller");
};
export const updatePost = (req, res) => {
  res.json("from controller");
};
