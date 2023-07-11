const User = require("../Model/UserModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const jwt_decode=require("jwt-decode")

exports.createjwtcookie = async ({savedUser}) => {
    // sign the token
    const token = jwt.sign({ user: savedUser._id, }, process.env.JWT_SECRET, {
        expiresIn: "3h",
    });
    // send the token in a HTTP-only cookie
    res.cookie("Authentication", token, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
    }).redirect("/");
}
