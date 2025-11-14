import { useState } from "react";
import { storage } from "../utils/storage";

const useAuth = () => {
  const [user, setUser] = useState(storage.get("user") || null);
  const [token, setToken] = useState(storage.get("token") || null);

  const login = (userData, jwtToken) => {
    storage.save("user", userData);
    storage.save("token", jwtToken);

    setUser(userData);
    setToken(jwtToken);
  };

  const logout = () => {
    storage.remove("user");
    storage.remove("token");

    setUser(null);
    setToken(null);
  };

  return {
    user,
    token,
    isLoggedIn: !!token,
    login,
    logout,
  };
};

export default useAuth;
