import React from 'react'
import './Header.css'
export default function Header() {
  return (
    <div class="topnav" id="myTopnav">
      <a href="#home" >JobPrepPro</a>
      <div className="signin">
      <a href="#home" >Home</a>
      <a href="#news">Practice</a>
      <a href="#about">Achievers</a>
      <a href="#contact">Discussion</a>
      <a href="#about">Job Opening</a>
      <a href="#contact">Contact</a>
      <a href="/SignUp">Sign Up</a>
      <a href="/Signin">Login</a>
      </div>
    </div>
  )
}
