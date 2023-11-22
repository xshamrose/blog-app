import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="auth">
      <h2>Login</h2>
      <form>
        <input required type="text" placeholder="Username" autoComplete="on" />
        <input
          required
          type="password"
          placeholder="Password"
          autoComplete="on"
        />
        <button>Login</button>
        <p>Error!</p>
        <span>
          Don't you have an account?
          <Link to="/Registration">Register</Link>
        </span>
      </form>
    </div>
  );
}

export default Login;
