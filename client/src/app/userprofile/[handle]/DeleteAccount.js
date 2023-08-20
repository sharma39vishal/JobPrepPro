"use client"
import React from 'react'
import './deleteaccount.css'
import axios from 'axios'

export default function DeleteAccount({delacc,setdelacc}) {
  
  const callapi = async () => {
    console.log("API Call")
    await axios.get("/profile/deleteaccount")
    .then((res)=>{
      alert("Account was successfuly deactivated");
      window.location.reload();
    }).catch((err) => { console.log(err) })

  }

  return (
    <div className={delacc?"card":"card make-display-none"}>
  <div className="header">
    <div className="image">
      <svg
        aria-hidden="true"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </svg>
    </div>
    <div className="content">
      <span className="title">Deactivate account</span>
      <p className="message">
        Are you sure you want to deactivate your account? All of your data will
        be permanently removed. This action cannot be undone.
      </p>
    </div>
    <div className="actions">
      <button className="desactivate" onClick={()=>{callapi()}} type="button">
        Deactivate
      </button>
      <button className="cancel" type="button" onClick={()=>{ setdelacc(false)}} > 
        Cancel
      </button>
    </div>
  </div>
</div>

  )
}
