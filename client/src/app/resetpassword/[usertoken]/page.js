"use client"
import React, { useState } from 'react'
import './ResetPassword.css'
import axios from 'axios'
export default function Page({ params }) {
    const [ changepassword, setchangepassword] = useState({
        newpassword:"",
        confirmpassword:"",
    })
 
    const handleChange = e => {
        const { name, value } = e.target
        setchangepassword({
            ...changepassword,
            [name]: value
        })
        // console.log(changepassword)
    }

    async function ChangeforgetPassword() {
        //  console.log("PAswword")
        try {
          const {newpassword,confirmpassword}=changepassword;
           if(!newpassword){
              alert("Incomplete Details");
              return;
           }
           if(newpassword!==confirmpassword){
            alert("New and Confirm Password Must be same");
            return;
         }
        //  console.log({params})
          await axios.post(`/auth/resetpassword/${params.usertoken}`,changepassword)
          .then((res)=>{alert("Password Changed Successfully")});
        } catch (err) {
          console.error(err);
        }
      }
    return (
        <div className="outer-box">
            <div className="modal">
            <div className="form">
              <p className="heading">Reset Password</p>

              <p className="instruction">Your new password must be different from previous used passwords.</p>

                <div className="field">
                    <svg className="input-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"></path>
                    </svg>
                    <input placeholder="New Password" className="input-field" type="password"  name="newpassword" value={changepassword.newpassword} onChange={ handleChange }></input>
                </div>

                <div className="field">
                    <svg className="input-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"></path>
                    </svg>
                    <input placeholder="Confirm New Password" className="input-field" type="password"  name="confirmpassword" value={changepassword.confirmpassword} onChange={ handleChange }/>
                </div>

                <div className="login-btn">
                    <button className="upgrade-btn" onClick={()=>{ChangeforgetPassword()}}>Reset Password</button>
                </div>
            </div>
        </div>
        </div>
        
    )
}

