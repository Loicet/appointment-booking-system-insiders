import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // initialize from localStorage
  useEffect(() => {
    const raw = localStorage.getItem("kc_auth");
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (raw) setUser(JSON.parse(raw));
    setLoading(false);
  }, []);

  const login = ({ email, role = "patient" }) => {
    // mock token / user (replace with real API)
    const authUser = { email, role, token: "demo-token-123" };
    localStorage.setItem("kc_auth", JSON.stringify(authUser));
    setUser(authUser);
    // navigate to dashboard or desired page
    navigate("/dashboard");
  };

  const signup = ({ name, email, role = "patient" }) => {
    // mock signup (replace with real API)
    const newUser = { name, email, role, token: "demo-token-123" };
    localStorage.setItem("kc_auth", JSON.stringify(newUser));
    setUser(newUser);
    navigate("/dashboard");
  };

  const logout = () => {
    localStorage.removeItem("kc_auth");
    setUser(null);
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);