const router = require("express").Router();
const User = require("../Model/UserModel");
const jwt = require("jsonwebtoken");
const jwt_decode=require("jwt-decode");
const Recordlog = require("../Controller/logs");

router.get("/:id",(req, res) => {
    User.findById(req.params.id)
        .then((user) => res.json(user))
        .catch((err) => res.status(400).json("Error: " + err));
});

router.get("/deleteaccount",(req, res) => {
    const token = req.cookies.token;
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    Recordlog({user_id:verified.user,ip:req.ip,what:"User Profile Deleted"})
    User.findOneAndUpdate({_id:verified.user},{account_status:"Deleted"})
        .then((user) => res.json(user))
        .catch((err) => res.status(400).json("Error: " + err));
});

router.post("/editpassword",(req,res)=>{
    const {oldpassword,newpassword}=req.body;
    const token = req.cookies.token;
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    const existinguser = User.findById(verified.user);
    Recordlog({user_id:existinguser._id,ip:req.ip,what:"User Password Updated"})
    if(existinguser.password!==oldpassword){
        return res.status(400).json({ errorMessage: "Incorrect Password", });
    }
    var passwordregex = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$"
    if (!passwordregex.test(newpassword))
        return res.status(400).json({ errorMessage: "Minimum eight and maximum 10 characters, at least one uppercase letter, one lowercase letter, one number and one special character", });

    User.findOneAndUpdate({_id:verified.user},{password})
        .then((user) => res.json(user))
        .catch((err) => res.status(400).json("Error: " + err));
})

module.exports = router;