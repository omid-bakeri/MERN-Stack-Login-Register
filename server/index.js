const express = require("express");
const cors = require("cors");
const router = require("./router");
const { default: mongoose } = require("mongoose");

const app = express();
app.use(express.json());
app.use(cors());



mongoose.connect("mongodb://127.0.0.1:27017/employee");

const port = 8000;

app.use("/", router);
app.listen(port, (req, res) => {
  console.log(`server run in localhost:${port}`);
});
