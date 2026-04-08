const express = require("express");
const {
  getCurrentUser,
  loginUser,
  logoutUser,
  registerUser,
} = require("../controller/user.controller");
const { requireAuth } = require("../middleware/auth.middleware");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.get("/me", requireAuth, getCurrentUser);

module.exports = router;
