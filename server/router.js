const express = require("express");
const home = require("./routes/Home");
const about = require("./routes/About");
const register = require("./routes/api/register");
const login = require("./routes/api/login");

const router = express.Router();

router.get("/", home.getHome);
router.get("/about", about.getAbout);
router.post("/api/register", register.postRegister);
router.post("/api/login", login.postLogin);

module.exports = router;
