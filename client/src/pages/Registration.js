import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Registration() {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [err, setError] = useState(null);

  const navigate = useNavigate();
  const handleRegister = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // try {
    //   const res = await axios.post("auth/register", inputs);
    //   console.log(res);
    // } catch (err) {
    //   console.log(err);
    // }
    const apiUrl = "http://localhost:4444/api/auth/register";

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: inputs.username,
          email: inputs.email,
          password: inputs.password,
        }),
      });
      if (response.ok) {
        alert("User registered successfully!");
        navigate("/login");
      } else {
        if (response.status === 409) {
          const errorData = await response.json();
          setError(errorData.error);
        } else {
          setError("Registration failed. Please try again.");
        }
      }
    } catch (err) {
      setError("Error during registration. Please try again.");
      console.error("Error during registration:", err);
    }
  };
  return (
    <div className="auth">
      <h2>Registration</h2>
      <form>
        <input
          required
          type="text"
          placeholder="Username"
          name="username"
          autoComplete="on"
          onChange={handleRegister}
        />
        <input
          required
          type="email"
          placeholder="email"
          name="email"
          autoComplete="on"
          onChange={handleRegister}
        />
        <input
          required
          type="password"
          placeholder="Password"
          name="password"
          autoComplete="on"
          onChange={handleRegister}
        />

        <button onClick={handleSubmit}>Register</button>
        {err && <p>{err}</p>}
        <span>
          Do you have an account?
          <Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  );
}

export default Registration;
