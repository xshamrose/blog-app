import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Registration() {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });

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
      } else {
        console.error("Registration failed");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
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
        <span>
          Do you have an account?
          <Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  );
}

export default Registration;
