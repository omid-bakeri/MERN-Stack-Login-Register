const express = require("express");
const cors = require("cors");
const router = require("./router");
const cookieParser = require("cookie-parser");
const { default: mongoose } = require("mongoose");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());
dotenv.config();

mongoose.connect(process.env.MONGO_URL);

const port = 8000;

app.use("/", router);
app.listen(port, (req, res) => {
  console.log(`server run in localhost:${port}`);
});
