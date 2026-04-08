const express = require("express");
const { generateCode } = require("../controller/ai.controller");
const { requireAuth } = require("../middleware/auth.middleware");

const router = express.Router();

router.post("/generate", requireAuth, generateCode);

module.exports = router;
