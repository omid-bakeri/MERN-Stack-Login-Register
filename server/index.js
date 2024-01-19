const express = require("express");
const cors = require("cors");
const router = require("./router");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

const app = express();
const port = process.env.PORT || 8001; // Allow dynamic port configuration

app.use(express.json());
app.use(cors());
app.use(cookieParser());
dotenv.config();

// Use unified topology to avoid deprecation warning
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });

app.use("/", router);

app.listen(port, () => {
  console.log(`Server successfully running on http://localhost:${port}`);
});
