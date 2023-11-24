import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const apiUrl = "http://localhost:4444/api/auth/login";

  const login = async () => {
    try {
      const response = await axios.post(apiUrl, {
        username: inputs.username,
        password: inputs.password,
      });

      if (response.status === 200) {
        const userData = response.data;
        setUser(userData);
        setError(null);
      } else {
        if (response.status === 409) {
          const errorData = response.data;
          setError(errorData.error);
        } else {
          setError("Wrong username or password!");
        }
      }
    } catch (error) {
      console.error("An error occurred during login:", error);
      setError("An unexpected error occurred");
    }
  };

  const logout = () => {
    setUser(null);
    setError(null);
  };

  useEffect(() => {
    // Store user data in local storage
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);
  useEffect(() => {
    // Retrieve user data from local storage
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);
  return (
    <AuthContext.Provider
      value={{ user, error, login, logout, inputs, setInputs }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
