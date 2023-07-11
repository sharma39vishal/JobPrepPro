const User = require("../Model/UserModel");
const bcrypt = require("bcryptjs");
const { createjwtcookie } = require("./jwtcookie");

exports.createnewuser = async (props) => {
    const { username,email,password } = props;
    if (!username || !email || !password)
        return res.status(400).json({ errorMessage: "Please enter all required fields." });
    var passwordregex = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$"
    if (!passwordregex.test(password))
        return res.status(400).json({ errorMessage: "Password Minimum eight and maximum 10 characters, at least one uppercase letter, one lowercase letter, one number and one special character", });
    var emailregex="/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/"
    if (!emailregex.test(email)){
        return res.status(400).json({ errorMessage: "Please enter Vaild Email", });
    }
    const existingUsername = await User.findOne({ username });
    const existingemail = await User.findOne({ email });
    if (existingUsername || existingemail)
        return res.status(400).json({ errorMessage: "An account with this Username already exists.", });

    // hash the password
    const salt = await bcrypt.genSalt();
    password = await bcrypt.hash(password, salt);
    // save a new user account to the db
    const newUser = new User({
        profilePic: "https://firebasestorage.googleapis.com/v0/b/vishal-6ccf0.appspot.com/o/icons8-customer-96.png?alt=media&token=8b3c091b-dad2-4831-a836-8c904a35d6a9",
        username,
        name: username,
        email,
        password,
        phone: "",
        githubid: "",
        admin: false,
        otherdetails: [],
        created_at: new Date(),
        updated_at: new Date()
    });

    const savedUser = await newUser.save();
    createjwtcookie({savedUser});

}
