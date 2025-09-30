const express = require("express");
const mongoose = require("mongoose");
const path = require('path');
const cors = require("cors");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const rateLimit = require("express-rate-limit");
const csrf = require("csurf");
const morgan = require("morgan");
const conditionalRateLimit = require("./middlewares/conditionalRateLimit");
require("dotenv").config();

const ConnectDB = require("./config/DB");

// all routes

const app = express();
ConnectDB()

app.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true,
    })
);

// app.use(helmet());
app.use(helmet({
    crossOriginResourcePolicy: { policy: "cross-origin" } // allow frontend on different port to load images
}));
app.use(express.json({ limit: "10mb" }));
app.use(cookieParser());
app.use(morgan("combined"));

// app.use(conditionalRateLimit);

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// app.use('uploads', (req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
//     next();
// }, express.static(path.join(__dirname, 'uploads')));


app.get("/", (req, res) => {
    res.send(`✅ Server running on port ${PORT}`);
});

// ===== Error Handler =====
app.use((err, req, res, next) => {
    console.error("❌ Error:", err.stack);
    res.status(err.status || 500).json({
        success: false,
        message: err.message || "Internal Server Error",
    });
});

// ===== Server Listen =====
const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, "0.0.0.0", () => {
    console.log(`🚀 Server running on port ${PORT}`);
});

