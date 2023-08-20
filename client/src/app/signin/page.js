"use client"
import React, { useContext, useEffect, useState } from 'react'
import './SignUp.css'
import { redirect } from 'next/navigation'
import axios from 'axios'
import Image from 'next/image'
import AuthContext from '../Context/authContext'

export default function Page() {
  const { UserDetails,call_again_getuser,setcall_again_getuser} = useContext(AuthContext);
  
    useEffect(() => {
      // console.log("Login Page ",UserDetails)
      if(UserDetails){
        redirect('/')
      }
    }, [UserDetails])
    
    const [ user, setUser] = useState({
        username:"",
        email:"",
        password:"",
        usernameoremail:"",
    })
 
    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
        // console.log(user)
    }

    async function register() {
      try {
        // console.log("Chal Gaya")
        const {username,email,password}=user;
         if(!username||!email||!password){
            alert("Incomplete Details");
            return;
         }
         if (password.length<8){
           alert("Password Minimum eight");
           return;
         }
         var emailregex=/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
        if (!emailregex.test(email)){
          alert("Invalid Email");
          return;
        }
        await axios.post("/auth/register",user)
        .then((res)=>{ setcall_again_getuser(!call_again_getuser);});
      } catch (err) {
        console.error(err);
      }
    }
     
    async function login() {
      try {
        // console.log("Chal Gaya login")
        const {usernameoremail,password}=user;
         if(!usernameoremail||!password){
            alert("Incomplete Details");
            return;
         }
        await axios.post("/auth/login",user)
        .then((res)=>{ setcall_again_getuser(!call_again_getuser);});
      } catch (err) {
        console.error(err);
      }
    }

    const [issignin, setissignin] = useState(true);
    return (
        <div className='signin-singup-outer-box'>
        <div className={issignin?"container":"container right-panel-active"}  id="container">
          <div className="form-container sign-up-container">
            <div className='form'>
              <h1 style={{color:"#000"}}>Create Account</h1>
              <h1 style={{color:"#000"}}>Sign Up</h1>
              <div className="social-container">
                <a href="/auth/google" className="social">
                <Image width={"24"} height={"24"} src="/images/google.png" />
                </a>
                <a href="https://github.com/login/oauth/authorize?client_id=3d9f7d55ad5a114d9913" className="social">
                  <Image width={"24"} height={"24"} src="/images/github.png" />
                <i className="fa-brands fa-github"></i>
                </a>
                <a href="#" className="social">
                <Image width={"24"} height={"24"} src="/images/linkedin.png" />
                </a>
              </div>
              <span>or use your email for registration</span>
              <input type="text" placeholder="Username" name="username" value={user.username} onChange={ handleChange }/>
              <input type="email" placeholder="Email" name="email" value={user.email} onChange={ handleChange } />
              <input type="password" placeholder="Password"  name="password" value={user.password} onChange={ handleChange }/>
              <p className='password-req' style={{fontSize:"8px",margin:"0%",padding:"0%"}}>*Minimum eight and maximum 10 characters</p>
              <button onClick={()=>{register()}}>Sign Up</button>
            </div>
          </div>
          <div className="form-container sign-in-container">
            <div className='form'>
              <h1 style={{color:"#000"}}>Sign in</h1>
              <div className="social-container">
                <a href="http://localhost:5000/auth/google" className="social">
                <Image width={"24"} height={"24"} src="/images/google.png" />
                </a>
                <a href="https://github.com/login/oauth/authorize?client_id=3d9f7d55ad5a114d9913" className="social">
                  <Image width={"24"} height={"24"} src="/images/github.png" />
                <i className="fa-brands fa-github"></i>
                </a>
                <a href="#" className="social">
                <Image width={"24"} height={"24"} src="/images/linkedin.png" />
                </a>
              </div>
              <span>or use your account</span>
              <input type="text" placeholder="Email or Username"  name="usernameoremail" value={user.usernameoremail} onChange={ handleChange }/>
              <input type="password" placeholder="Password" name="password" value={user.password} onChange={ handleChange } />
              <a href="#">Forgot your password?</a>
              <button onClick={()=>{login()}}>Sign In</button>
            </div>
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1>Welcome Back!</h1>
                <p>To keep connected with us please login with your personal info</p>
                <button className="ghost" id="signIn" onClick={()=>{setissignin(true)}}>
                  Sign In
                </button>
              </div>
              <div className="overlay-panel overlay-right">
                <h1>Hello, Friend!</h1>
                <p>Enter your personal details and start journey with us</p>
                <button className="ghost" id="signUp" onClick={()=>{setissignin(false)}}>
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    )
}

