import React from 'react'
import './UserProfile.css'

export default function page() {
  return (
    <div class="outer-box">
      <div class="modal">
        <img src="https://res.cloudinary.com/alexandracaulea/image/upload/v1582179610/user_fckc9f.jpg" alt="User image" class="image" />
        <div class="text">
          <p>user123</p>
          <p>USER NAME</p>
          <p>user123@gmail.com</p>
        </div>
        <div class="bottom-buttons">
          <button class="button">Change Password</button>
          <button class="button" >Delete Account</button>
        </div>
      </div>
    </div>
  )
}
