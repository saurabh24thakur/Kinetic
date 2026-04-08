const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:4000/api/v1";

/**
 * @typedef {{ id: string; email: string; username: string }} AuthUser
 * @typedef {{ user: AuthUser }} AuthResponse
 */

const request = async (path, options = {}) => {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    credentials: "include",
    headers: { "Content-Type": "application/json", ...(options.headers || {}) },
    ...options,
  });

  const data = await response.json().catch(() => null);
  if (!response.ok) {
    const error = new Error(data?.message || "Request failed.");
    error.status = response.status;
    error.details = data;
    throw error;
  }

  return data;
};

export const registerUser = (payload) =>
  request("/register", { body: JSON.stringify(payload), method: "POST" });

export const loginUser = (payload) =>
  request("/login", { body: JSON.stringify(payload), method: "POST" });

export const logoutUser = () => request("/logout", { method: "POST" });

export const getCurrentUser = () => request("/me", { method: "GET" });

export const generateCode = (payload) =>
  request("/ai/generate", { body: JSON.stringify(payload), method: "POST" });
