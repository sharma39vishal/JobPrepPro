'use client'
import React, { useContext, useEffect } from 'react'
import './UserProfile.css'
import AuthContext from '../Context/authContext';
import Image from 'next/image';
import { redirect } from 'next/navigation';

export default function page() {
  const { UserDetails } = useContext(AuthContext);

  // useEffect(() => {
    // if(!UserDetails){
    //   redirect('/')
    // }
    // console.log(UserDetails)
  // }, [UserDetails])
  
  return (
    <div className="outer-box">
      <div className="modal">
        <Image width={"150"} height={"150"}  src={UserDetails?.profilePic} alt="User image" className="image" />
        <div className="text">
          <p>@{UserDetails?.username}</p>
          <p>{UserDetails?.email}</p>
          {/* <p>user123@gmail.com</p> */}
        </div>
        <div className="bottom-buttons">
          <button className="button">Change Password</button>
          <button className="button" >Delete Account</button>
        </div>
      </div>
    </div>
  )
}
