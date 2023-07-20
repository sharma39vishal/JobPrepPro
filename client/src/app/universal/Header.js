import React from 'react'
import './Header.css'
export default function Header() {
  return (
    <div class="topnav" id="myTopnav">
      <a href="/home" >JobPrepPro</a>
      <div className="signin">
      <a href="/home" >Home</a>
      <a href="/Practise">Practice</a>
      <a href="/Achievers">Achievers</a>
      <a href="/Discussion">Discussion</a>
      <a href="/Jobopening">Job Opening</a>
      <a href="/contact">Contact</a>
      <a href="/SignUp">Sign Up</a>
      <a href="/Signin">Login</a>
      </div>
    </div>
  )
}
