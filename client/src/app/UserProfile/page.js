import React from 'react'
import './UserProfile.css'

export default function page() {
  return (
    <div>
        <main class="container">
  <div class="card">
    <img src="https://res.cloudinary.com/alexandracaulea/image/upload/v1582179610/user_fckc9f.jpg" alt="User image" class="card__image" />
    <div class="card__text">
      <h2>user123</h2>
      <p>user123@gmail.com</p>
    </div>
    <div class="card__action">
      <button class="card__action__button card__action--follow">Change Password</button>
      <button class="card__action__button card__action--message" href="/DeleteAccount">Delete Account</button>
    </div>
  </div>
</main>
    </div>
  )
}
