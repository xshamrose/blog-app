import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

function Login() {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [err, setError] = useState(null);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const apiUrl = "http://localhost:4444/api/auth/login";

    try {
      login(inputs.username, inputs.password);
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: inputs.username,
          password: inputs.password,
        }),
      });
      if (response.ok) {
        navigate("/");
      } else {
        if (response.status === 409) {
          const errorData = await response.json();
          setError(errorData.error);
        } else {
          setError(" Wrong username or password!");
        }
      }
    } catch (err) {
      setError("Error during login. Please try again.");
      console.error("Error during login:", err);
    }
  };

  return (
    <div className="auth">
      <h2>Login</h2>
      <form>
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
        <button onClick={handleSubmit}>Login</button>
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
