"use client"
import React, {  useContext, useEffect, useState } from 'react'
import './UserProfile.css'
import Image from 'next/image';
import { redirect } from 'next/navigation';
import axios from 'axios';
import DeleteAccount from './DeleteAccount';
import AuthContext from '@/app/Context/authContext';

export default function Page({params}) {
  const { UserDetails,call_again_getuser,setcall_again_getuser} = useContext(AuthContext);
  const [CurrDetails, setCurrDetails] = useState(null)
  const [delacc, setdelacc] = useState(false);
  
//   console.log("USERNAME ",params.handle)
  // useEffect(() => {
    // if(!CurrDetails){
    //   redirect('/')
    // }
    // console.log(CurrDetails)
  // }, [CurrDetails])

  useEffect(async () => {
    await axios.get(`/profile/${params.handle}`)
    .then((res)=>{setCurrDetails(res.data)});
  }, [])
  
  
  return (
    <div className="userprofile-outer-box">
      <div className="modal">
        <Image width={"150"} height={"150"}  src={CurrDetails?.profilePic} alt="User image" className="image" />
        <div className="text">
          <p>@{CurrDetails?.username}</p>
          <p>{CurrDetails?.email}</p>
          {/* <p>user123@gmail.com</p> */}
        </div>
        {UserDetails&&CurrDetails&&UserDetails?._id===CurrDetails?._id?<div className="bottom-buttons">
          {/* <button className="button">Change Password</button> */}
          <button className="button" onClick={()=>{setdelacc(true)}}>Delete Account</button>
        </div>:null}
      </div>
      <DeleteAccount setdelacc={setdelacc} delacc={delacc}/>
    </div>
  )
}
