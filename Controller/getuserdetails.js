const User = require("../Model/UserModel");
const jwt = require("jsonwebtoken");
const jwt_decode=require("jwt-decode");

exports.getuserdetails= async (req, res) => {
    try {
        const token = req.cookies.token;
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        const existinguser = User.findById(verified.user);
        res.status(200).send(existinguser)
    } catch (err) {
        res.status(400).send(err);
    }
}