const crypto = require("crypto");

const SESSION_TTL_MS = 1000 * 60 * 60 * 24 * 7;

const getSessionSecret = () => process.env.SESSION_SECRET || "development-session-secret";

const encode = (value) => Buffer.from(value).toString("base64url");

const decode = (value) => Buffer.from(value, "base64url").toString("utf8");

const sign = (payload) => crypto.createHmac("sha256", getSessionSecret()).update(payload).digest("base64url");

const createSessionToken = (userId) => {
  const payload = JSON.stringify({ userId, expiresAt: Date.now() + SESSION_TTL_MS });
  const encodedPayload = encode(payload);
  return `${encodedPayload}.${sign(encodedPayload)}`;
};

const verifySessionToken = (token) => {
  const [encodedPayload, signature] = token.split(".");
  if (!encodedPayload || !signature || sign(encodedPayload) !== signature) {
    return null;
  }

  const payload = JSON.parse(decode(encodedPayload));
  return payload.expiresAt > Date.now() ? payload : null;
};

module.exports = {
  SESSION_TTL_MS,
  createSessionToken,
  verifySessionToken,
};
