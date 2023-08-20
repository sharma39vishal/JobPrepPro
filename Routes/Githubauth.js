const { default: axios } = require("axios");
const router = require("express").Router();
const path = require("path");
const User = require("../Model/UserModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const jwt_decode=require("jwt-decode");
const generateuniqueusername = require("../Controller/getuniqueusername");
const Recordlog = require("../Controller/logs");
// Declare the callback route

router.get('/github/callback', (req, res) => {

    // The req.query object has the query params that were sent to this route.
    const requestToken = req.query.code

    axios({
      method: 'post',
      url: `https://github.com/login/oauth/access_token?client_id=${process.env.GITHUB_OAUTH_CLIENT_ID}&client_secret=${process.env.GITHUB_OAUTH_CLIENT_SECRET}&code=${requestToken}`,
      // Set the content type header, so that we get the response in JSON
      headers: {
           accept: 'application/json'
      }
    }).then((response) => {
      access_token = response.data.access_token
      res.redirect('/auth/success');
    })
  })
  
  router.get('/success', async(req, res)=> {
    const response= await axios({
      method: 'get',
      url: `https://api.github.com/user`,
      headers: {
        Authorization: 'token ' + access_token
      }
    })
        // console.log(response.data)
     const existinggithub = await User.findOne({ githubid:response.data.login});
      if(existinggithub){
        if(existinggithub.account_status!=="Active"){
          return res.status(400).json({ errorMessage: "Account Does Not Exist", });
      }
          const token = jwt.sign(
            {
              user: existinggithub._id,
            },
            process.env.JWT_SECRET
          );
        // send the token in a HTTP-only cookie
        res.cookie("token", token, {
            maxAge: 3 * 60 * 60 * 1000,
            httpOnly: true,
            secure: true,
            sameSite: "none",
        }).status(200).redirect("http://localhost:3000/");
      }
      else{
        // save a new user account to the db
        const username=await generateuniqueusername({"username":response.data.login})
        // console.log(username)
        const newUser = new User({
            profilePic: "https://firebasestorage.googleapis.com/v0/b/vishal-6ccf0.appspot.com/o/icons8-customer-96.png?alt=media&token=8b3c091b-dad2-4831-a836-8c904a35d6a9",
            username ,
            name: req.user._json.name,
            email:"",
            password:"$2a$10$AYGkEUdWY1YwkChGY/fQjuFnaTXuHzCqD7SqDbr7iCmhvNUP8MH46",
            phone: "",
            githubid: response.data.login,
            admin: false,
            otherdetails: [],
            created_at: new Date(),
            updated_at: new Date(),
            account_status:"Active"
        });
    
        const savedUser = await newUser.save();  
        // sign the token
          Recordlog({user_id:savedUser._id,ip:req.ip,what:"New User Created By Github"})
          const token = jwt.sign(
            {
              user: savedUser._id,
            },
            process.env.JWT_SECRET
          );
        // send the token in a HTTP-only cookie
        res.cookie("token", token, {
            maxAge: 3 * 60 * 60 * 1000,
            httpOnly: true,
            secure: true,
            sameSite: "none",
        }).status(200).redirect("/");
      }
      // console.log(req.user._json.name);
      // console.log(req.user._json.email);
      // res.send({status:true,auth_name:req.user._json.name,auth_email:req.user._json.email})
      // res.redirect("/")
    
    //   res.render('/',{ userData: response.data });
        // res.redirect("/")
    
  });

module.exports = router;