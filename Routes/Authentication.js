const router = require("express").Router();
const User = require("../Model/UserModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const jwt_decode=require("jwt-decode")
const createnewuser=require("../Controller/createnewuser");
const { loginbyemail, loginbyusername } = require("../Controller/loginuser");

// Google Authentication
router.use("/", require("./Googleauth"));
router.use("/", require("./Githubauth"));

router.post("/register", async (req, res) => {
    try {
      const { username,email,password } = req.body;
      createnewuser({username,email,password});

    } catch (err) {
      res.status(400).send(err);
    }
});

router.post("/login", async (req, res) => {
    try {
        const { usernameoremail,password } = req.body;
        if(!usernameoremail||!password){
            return res.status(400).json({ errorMessage: "Please enter all required fields." });
        }
        var passwordregex = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$"
        if (!passwordregex.test(password))
            return res.status(400).json({ errorMessage: "Not a Valid user", });
        var emailregex="/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/"
        if (emailregex.test(email)){
            loginbyemail({email:usernameoremail,password});
        }
        else{
            loginbyusername({username:usernameoremail,password});
        }

    } catch (err) {
        res.status(400).send(err);
    }
});


module.exports = router;