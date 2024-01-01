const express = require("express");
const home = require("./routes/Home");
const about = require("./routes/About");
const router = express.Router();

router.get("/", home.getHome);
router.get("/about", about.getAbout);
module.exports = router;
