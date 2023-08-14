"use client"
import React, {  useEffect, useState } from 'react'
import './UserProfile.css'
import Image from 'next/image';
import { redirect } from 'next/navigation';
import axios from 'axios';
import DeleteAccount from './DeleteAccount';

export default function Page({params}) {
  const [UserDetails, setUserDetails] = useState(null)
  const [delacc, setdelacc] = useState(false);
//   console.log("USERNAME ",params.handle)
  // useEffect(() => {
    // if(!UserDetails){
    //   redirect('/')
    // }
    // console.log(UserDetails)
  // }, [UserDetails])

  useEffect(async () => {
    await axios.get(`/profile/${params.handle}`)
    .then((res)=>{setUserDetails(res.data)});
  }, [])
  
  
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
          {/* <button className="button">Change Password</button> */}
          <button className="button" onClick={()=>{setdelacc(true)}}>Delete Account</button>
        </div>
      </div>
      <DeleteAccount setdelacc={setdelacc} delacc={delacc}/>
    </div>
  )
}
