const crypto = require("crypto");
const { promisify } = require("util");

const scrypt = promisify(crypto.scrypt);
const SALT_BYTES = 16;
const KEY_LENGTH = 64;

const hashPassword = async (password) => {
  const salt = crypto.randomBytes(SALT_BYTES).toString("hex");
  const derivedKey = await scrypt(password, salt, KEY_LENGTH);
  return `${salt}:${Buffer.from(derivedKey).toString("hex")}`;
};

const verifyPassword = async (password, storedHash) => {
  const [salt, key] = storedHash.split(":");
  if (!salt || !key) {
    return false;
  }

  const storedKey = Buffer.from(key, "hex");
  const derivedKey = await scrypt(password, salt, KEY_LENGTH);
  if (storedKey.length !== Buffer.from(derivedKey).length) {
    return false;
  }

  return crypto.timingSafeEqual(storedKey, Buffer.from(derivedKey));
};

module.exports = {
  hashPassword,
  verifyPassword,
};
