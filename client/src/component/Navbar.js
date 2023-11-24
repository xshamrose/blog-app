import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";

function Navbar() {
  const { user, logout } = useAuth();
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <img
            src={logo}
            alt="Logo"
            style={{
              height: "70px",
              width: "90px",
              border: "none",
              marginLeft: "10px",
              borderRadius: "50px",
            }}
          />
        </div>
        <div className="links">
          <Link className="link" to="/?cat=art">
            ART
          </Link>
          <Link className="link" to="/?cat=social">
            SOCIAL
          </Link>
          <Link className="link" to="/?cat=technology">
            TECHNOLOGY
          </Link>
          <Link className="link" to="/?cat=cinema">
            CINEMA
          </Link>
          <Link className="link" to="/?cat=design">
            DESIGN
          </Link>

          {user ? (
            <div>
              <span className="link" style={{ marginRight: "10px" }}>
                {" "}
                {user.username}
              </span>
              <span onClick={logout}>Logout</span>
            </div>
          ) : (
            <Link className="link" to="/login">
              Login
            </Link>
          )}
          <span className="write">
            <Link className="link" to="/Write">
              Write
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
