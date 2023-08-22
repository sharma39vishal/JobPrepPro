const router = require("express").Router();
const { default: jwtDecode } = require("jwt-decode");
const passport = require("passport");
const { loginuser } = require("../Controller/loginuser");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const User = require("../Model/UserModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const jwt_decode=require("jwt-decode");
const generateuniqueusername = require("../Controller/getuniqueusername");
const Recordlog = require("../Controller/logs");
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);

const store = new MongoDBStore({
  uri: process.env.MDB_CONNECT, // Replace with your MongoDB connection string
  collection: "sessions", // Name of the collection to store sessions in
  autoRemove: "native", // Automatically remove expired sessions from the store
});

store.on("error", function (error) {
  console.error("MongoDB session store error:", error);
});

router.use(
  session({
    secret: process.env.SESSIONSECRET,
    resave: false,
    saveUninitialized: true,
    store: store,
    cookie: { secure: false },
  })
);

// Initialize passport
router.use(passport.initialize());
router.use(passport.session());

passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.clientID,
        clientSecret: process.env.clientSecret,
        callbackURL: `/auth/google/callback`,
      },
      function (accessToken, refreshToken, profile, cb) {
        // Use the profile information to authenticate the user
        // ...
        cb(null, profile);
      }
    )
  );
  
  passport.serializeUser(function (user, cb) {
    cb(null, user);
  });
  
  passport.deserializeUser(function (obj, cb) {
    cb(null, obj);
  });

  router.get("/google",passport.authenticate("google", { scope: ["profile", "email"] }));
  
  router.get("/google/callback",    passport.authenticate("google", { failureRedirect: "/login" }),
    function (req, res) {
      res.redirect("/auth/isgoogleauthenticated");
    }
  );
  
// for production "http://localhost:3000"+ on redirect

  router.get("/isgoogleauthenticated",async (req,res)=>{
    if (req.isAuthenticated()) {
      const existingemail = await User.findOne({ email:req.user._json.email });
      if(existingemail){
          if(existingemail.account_status!=="Active"){
            return res.status(400).json({ errorMessage: "Account Does Not Exist", });
          }
          const token = jwt.sign(
            {
              user: existingemail._id,
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
        const mail=req.user._json.email;
        const takeoutemailname=mail.substring(0,mail.indexOf("@"));
        const username=await generateuniqueusername({"username":takeoutemailname})
        const newUser = new User({
            profilePic: "https://firebasestorage.googleapis.com/v0/b/vishal-6ccf0.appspot.com/o/icons8-customer-96.png?alt=media&token=8b3c091b-dad2-4831-a836-8c904a35d6a9",
            username ,
            name: username,
            email:req.user._json.email,
            password:"$2a$10$AYGkEUdWY1YwkChGY/fQjuFnaTXuHzCqD7SqDbr7iCmhvNUP8MH46",
            phone: "",
            githubid: "",
            admin: false,
            otherdetails: [],
            created_at: new Date(),
            updated_at: new Date(),
            account_status:"Active"
        });
    
        const savedUser = await newUser.save();  
        // sign the token
        Recordlog({user_id:savedUser._id,ip:req.ip,what:"New User Created By Google Auth"})
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
        }).status(200).redirect("http://localhost:3000/");
      }
      // console.log(req.user._json.name);
      // console.log(req.user._json.email);
      // res.send({status:true,auth_name:req.user._json.name,auth_email:req.user._json.email})
      // res.redirect("/")
    }
    else{
        res.send(false)
    }
    // console.log("no req")
    // res.send("done")
  })  

module.exports = router;