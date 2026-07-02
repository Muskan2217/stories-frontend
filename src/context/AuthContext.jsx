import { createContext, useContext, useState, useEffect } from "react";
import { apiClient, API } from "../config/api";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // On app load, check if a token exists and fetch current user
  useEffect(() => {
    const token = localStorage.getItem("auth_token");

    if (!token) {
      setLoading(false);
      return;
    }

    apiClient
      .get(API.me)
      .then((res) => {
        setUser(res.data);
      })
      .catch(() => {
        localStorage.removeItem("auth_token");
        localStorage.removeItem("auth_user");
        setUser(null);
      })
      .finally(() => setLoading(false));
  }, []);

  const login = async (email, password) => {
    const res = await apiClient.post(API.login, { email, password });
    const { user, token } = res.data;

    localStorage.setItem("auth_token", token);
    localStorage.setItem("auth_user", JSON.stringify(user));
    setUser(user);

    return user;
  };

  const register = async (name, email, password, password_confirmation) => {
    const res = await apiClient.post(API.register, {
      name,
      email,
      password,
      password_confirmation,
    });
    const { user, token } = res.data;

    localStorage.setItem("auth_token", token);
    localStorage.setItem("auth_user", JSON.stringify(user));
    setUser(user);

    return user;
  };

  const logout = async () => {
    try {
      await apiClient.post(API.logout);
    } catch (e) {
      // ignore errors, clear local state regardless
    }
    localStorage.removeItem("auth_token");
    localStorage.removeItem("auth_user");
    setUser(null);
  };

  // Helper to check role
  const hasRole = (role) => {
    if (!user?.roles) return false;
    return user.roles.includes(role);
  };

  return (
    <AuthContext.Provider
      value={{ user, loading, login, register, logout, hasRole }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);