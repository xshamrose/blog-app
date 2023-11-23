import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const login = async (username, password) => {
    const apiUrl = "http://localhost:4444/api/auth/login";
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    if (response.ok) {
      setUser(username);

      setError(null);
    } else {
      if (response.status === 409) {
        const errorData = await response.json();
        setError(errorData.error);
      } else {
        setError("Wrong username or password!");
      }
    }
  };

  const logout = () => {
    // Your logout logic here
    // ...

    setUser(null);
    setError(null);
  };
  useEffect(() => {
    localStorage.setItem("user", user);
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, error, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
