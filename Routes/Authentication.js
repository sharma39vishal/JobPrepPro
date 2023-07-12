const router = require("express").Router();
const User = require("../Model/UserModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const jwt_decode=require("jwt-decode");
const { createnewuser } = require("../Controller/createnewuser");
const { loginuser } = require("../Controller/loginuser");
const isauthenticated = require("../Middleware/isauthenticated");
const { getuserdetails } = require("../Controller/getuserdetails");
const { logoutuser } = require("../Controller/logoutuser");

// Google Authentication
router.use("/", require("./Googleauth"));
router.use("/", require("./Githubauth"));
router.post("/register",createnewuser);
router.post("/login",loginuser);
router.get("/isauthentic",isauthenticated,getuserdetails);
router.get("/logout",isauthenticated,logoutuser);


module.exports = router;