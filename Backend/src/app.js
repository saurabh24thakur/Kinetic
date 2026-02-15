const express=require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const app = express();

app.use(cors());
const authRouter = require('../routes/auth.router');
const connectDB = require('../models/connectdb');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// connect db function**************

connectDB();


// Routes

app.use("/api/v1",authRouter);

module.exports = app;
