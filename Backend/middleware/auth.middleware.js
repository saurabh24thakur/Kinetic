const User = require("../models/userModel");
const { COOKIE_NAME } = require("../utils/auth");
const { verifySessionToken } = require("../utils/session");

const requireAuth = async (req, res, next) => {
  const token = req.cookies[COOKIE_NAME];
  if (!token) {
    return res.status(401).json({ message: "Authentication required." });
  }

  const session = verifySessionToken(token);
  if (!session?.userId) {
    return res.status(401).json({ message: "Session expired or invalid." });
  }

  const user = await User.findById(session.userId);
  if (!user) {
    return res.status(401).json({ message: "User not found." });
  }

  req.user = user;
  return next();
};

module.exports = {
  requireAuth,
};
