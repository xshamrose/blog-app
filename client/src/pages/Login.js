import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import axios from "axios";

function Login() {
  const [err, setError] = useState(null);
  const navigate = useNavigate();
  const { login, inputs, setInputs } = useAuth();

  const handleLogin = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const apiUrl = "http://localhost:4444/api/auth/login";

    try {
      const response = await axios.post(apiUrl, {
        username: inputs.username,
        password: inputs.password,
      });

      if (response.status === 200) {
        setError(null);
        navigate("/");
      } else {
        if (response.status === 409) {
          const errorData = response.data;
          setError(errorData.error);
        } else {
          setError("Wrong username or password!");
        }
      }
      login();
    } catch (err) {
      setError("Wrong username or password!");
      console.error("Error during login:", err);
    }
  };

  return (
    <div className="auth">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          required
          type="text"
          placeholder="Username"
          name="username"
          autoComplete="on"
          onChange={handleLogin}
        />
        <input
          required
          type="password"
          placeholder="Password"
          name="password"
          autoComplete="on"
          onChange={handleLogin}
        />
        <button type="submit">Login</button>
        {err && <p>{err}</p>}
        <span>
          Don't you have an account?
          <Link to="/Registration">Register</Link>
        </span>
      </form>
    </div>
  );
}

export default Login;
