const express = require("express");
const cors = require("cors");
const router = require("./router");

const app = express();

app.use(cors());

const port = 8000;

app.use("/", router);
app.listen(port, (req, res) => {
  console.log(`server run in localhost:${port}`);
});
