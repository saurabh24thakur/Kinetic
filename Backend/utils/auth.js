const { createSessionToken, SESSION_TTL_MS } = require("./session");

const COOKIE_NAME = "kinetic_session";

const getCookieOptions = () => ({
  httpOnly: true,
  maxAge: SESSION_TTL_MS,
  sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
  secure: process.env.NODE_ENV === "production",
});

const sanitizeUser = (user) => ({
  id: user.id,
  email: user.email,
  username: user.username,
});

const setSessionCookie = (res, userId) => {
  res.cookie(COOKIE_NAME, createSessionToken(userId), getCookieOptions());
};

const clearSessionCookie = (res) => {
  res.clearCookie(COOKIE_NAME, getCookieOptions());
};

module.exports = {
  COOKIE_NAME,
  clearSessionCookie,
  sanitizeUser,
  setSessionCookie,
};
