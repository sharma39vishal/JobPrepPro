'use client'
import React, { useContext, useState } from 'react'
import './Header.css'
import AuthContext from '../Context/authContext'
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const { UserDetails } = useContext(AuthContext);
  // console.log(UserDetails);
  const [avatardropdown, setavatardropdown] = useState(false);
  
  const logout=async()=>{
    await axios.get("/auth/logout").then(()=>{window.location.reload();})
  }

  return (
    <div className='header-main'>
      <div className="navbar-container">
        <div className="nav-items-container">
          <div className="navbar-left-items">
            <div className="nav-left-single-item">
              <Link href="/jobopening">Job Openings</Link>
            </div>
            <div className="nav-left-single-item">
              <Link href="/practice">Practice</Link>
            </div>
            <div className="nav-left-single-item">
              <Link href="/discussion">Discussion</Link>
            </div>
            <div className="nav-left-single-item">
              <Link href="/roadmap">Roadmap</Link>
            </div>
            <div className="nav-left-single-item">
              <Link href="/achievers">Achievers</Link>
            </div>
          </div>
          <div className="navbar-logo">
            <Link href="/home"><img src="https://icon-library.com/images/icon-logo-png/icon-logo-png-11.jpg" alt="Loading Error" /></Link>
          </div>
          <div className="navbar-right-items">
            <div className="nav-right-developer">
              <Link href="/developers">Developers</Link>
            </div>
            <div className="nav-right-signin">

              {!UserDetails?<a href="/signin">Sign In</a>:<div>
              <div >
                <Image  width={"40"} height={"40"} src={UserDetails?.profilePic} alt="profile Photo" onClick={()=>{setavatardropdown(!avatardropdown)}}/>
              </div>
             {avatardropdown? 
              <div className='avatar-dropdown'>
                <a href={`/userprofile/${UserDetails.username}`}>Profile</a>
                <a onClick={()=>{logout()}}>LogOut</a>
              </div>:null}

              </div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
