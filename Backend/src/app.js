const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const authRouter = require("../routes/auth.router");
const aiRouter = require("../routes/ai.router");
const connectDB = require("../models/connectdb");

const app = express();
const allowedOrigin = process.env.CLIENT_URL || "http://localhost:5173";

app.use(
  cors({
    credentials: true,
    origin: allowedOrigin,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

connectDB();

app.use("/api/v1", authRouter);
app.use("/api/v1/ai", aiRouter);

app.use((error, _req, res, _next) => {
  const statusCode = error.name === "ValidationError" ? 400 : 500;
  return res.status(statusCode).json({ message: error.message || "Internal server error." });
});

module.exports = app;
