const express = require("express");
const { register, login ,refreshTokenHandler,logout} = require("../controllers/authController");
const cookieParser = require("cookie-parser");

const router = express. Router() ;

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.use(cookieParser());
router.post("/refresh", refreshTokenHandler);
module.exports = router;