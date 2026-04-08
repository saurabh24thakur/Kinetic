import { useEffect, useState } from "react";
import { getCurrentUser, loginUser, logoutUser, registerUser } from "../lib/api.js";
import { AuthContext } from "./auth-context.js";

const useAuthState = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const refreshUser = async () => {
    try {
      const data = await getCurrentUser();
      setUser(data.user);
    } catch {
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const loadUser = async () => {
      try {
        const data = await getCurrentUser();
        setUser(data.user);
      } catch {
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    };

    loadUser();
  }, []);

  const login = async (payload) => {
    const data = await loginUser(payload);
    setUser(data.user);
    return data.user;
  };

  const register = async (payload) => {
    const data = await registerUser(payload);
    setUser(data.user);
    return data.user;
  };

  const logout = async () => {
    await logoutUser();
    setUser(null);
  };

  return { isLoading, login, logout, refreshUser, register, user };
};

export const AuthProvider = ({ children }) => {
  const value = useAuthState();
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
