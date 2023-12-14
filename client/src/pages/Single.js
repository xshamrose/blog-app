import React, { useState, useEffect } from "react";
import edit from "../assets/edit.png";
import remove from "../assets/remove.jpg";
import { Link, useLocation } from "react-router-dom";
import Menu from "../component/Menu";
import axios from "axios";
import moment from "moment";
import { useAuth } from "../context/authContext";

function Single() {
  const [post, setPost] = useState({});
  const location = useLocation();
  const postId = location.pathname.split("/")[2];
  const { currentUser } = useAuth();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:4444/api/post/${postId}`);
        if (Array.isArray(res.data)) {
          setPost(res.data);
        } else {
          console.error("Data is not an array:", res.data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [postId]);
  return (
    <div className="single">
      <div className="content">
        <img src={post?.img} alt="" />
        <div className="user">
          <img src={post?.userImg} alt="" />
          <div className="info">
            <span>{post?.username}</span>
            <p> posted {moment(post?.date).fromNow()} </p>
          </div>
          {currentUser?.username === post?.username && (
            <div className="edit">
              <Link to={`/write?edit=2`}>
                <img src={edit} alt=""></img>
              </Link>
              <img src={remove} alt=""></img>
            </div>
          )}
        </div>
        <h1>{post?.title}</h1>
        {post?.desc}
      </div>
      <Menu />
    </div>
  );
}

export default Single;
