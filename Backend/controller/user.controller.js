const User = require("../models/userModel");
const { hashPassword, verifyPassword } = require("../utils/password");
const { clearSessionCookie, sanitizeUser, setSessionCookie } = require("../utils/auth");

const registerUser = async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res.status(400).json({ message: "Username, email, and password are required." });
  }

  const normalizedEmail = email.trim().toLowerCase();
  const normalizedUsername = username.trim().toLowerCase();
  const existingUser = await User.findOne({ $or: [{ email: normalizedEmail }, { username: normalizedUsername }] });
  if (existingUser) {
    return res.status(409).json({ message: "An account with that email or username already exists." });
  }

  const passwordHash = await hashPassword(password);
  const user = await User.create({ username: normalizedUsername, email: normalizedEmail, passwordHash });
  setSessionCookie(res, user.id);
  return res.status(201).json({ user: sanitizeUser(user) });
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required." });
  }

  const user = await User.findOne({ email: email.trim().toLowerCase() }).select("+passwordHash");
  if (!user) {
    return res.status(401).json({ message: "Invalid email or password." });
  }

  const isValidPassword = await verifyPassword(password, user.passwordHash);
  if (!isValidPassword) {
    return res.status(401).json({ message: "Invalid email or password." });
  }

  setSessionCookie(res, user.id);
  return res.status(200).json({ user: sanitizeUser(user) });
};

const getCurrentUser = async (req, res) => {
  if (!req.user) {
    return res.status(401).json({ message: "Authentication required." });
  }

  return res.status(200).json({ user: sanitizeUser(req.user) });
};

const logoutUser = async (_req, res) => {
  clearSessionCookie(res);
  return res.status(200).json({ message: "Logged out successfully." });
};

module.exports = {
  getCurrentUser,
  loginUser,
  logoutUser,
  registerUser,
};
