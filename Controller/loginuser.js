const User = require("../Model/UserModel");
const bcrypt = require("bcryptjs");
const { createjwtcookie } = require("./jwtcookie");

exports.loginbyusername = async (props) => {
    const { username,password } = props;
    const existingUsername = await User.findOne({ username });
    if (!existingUsername)
        return res.status(400).json({ errorMessage: "An account with this Username Doesn't exists.", });
    if(existingUsername.password!==password){
        return res.status(400).json({ errorMessage: "Incorrect Password", });
    }
    createjwtcookie({savedUser:existingUsername});
}

exports.loginbyemail = async (props) => {
    const { email,password } = props;
    const existingemail = await User.findOne({ email });
    if (!existingemail)
        return res.status(400).json({ errorMessage: "An account with this Username Doesn't exists.", });
    if(existingemail.password!==password){
        return res.status(400).json({ errorMessage: "Incorrect Password", });
    }
    createjwtcookie({savedUser:existingemail});
}
