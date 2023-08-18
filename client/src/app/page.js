import React from 'react'
import './Home.css'
export default function Home() {
  return (
    <div className='outer-box'>
      <div className='img'>
        <img className="upper-image"src='https://st4.depositphotos.com/41604320/41753/v/600/depositphotos_417531030-stock-illustration-software-web-development-isometric-laptop.jpg'></img>
      </div>
      <div class="abc" >
        <div className='s-abc'>
          <p className='numbers'>2424</p>
          <p className="text">  Community made UI elements</p>
        </div>
        <div className='s-abc'>
          <p className='numbers'>2424</p>
          <p className="text">Community made UI elements</p>
        </div>
        <div className='s-abc'>
          <p className='numbers'>2424</p>
          <p className="text">Community made UI elements</p>
        </div>
      </div>
      <div className="group">
        <div class="card">
          <div class="infos">
            <div class="image"></div>
            <div class="info">
              <div>
                <p class="name">
                  Join our Telegram Channel
                </p>
              </div>
              <div class="stats">
                <p class="flex flex-col">
                  Articles
                  <span class="state-value">
                    34
                  </span>
                </p>
                <p class="flex">
                  Followers
                  <span class="state-value">
                    455
                  </span>
                </p>
              </div>
            </div>
          </div>
          <button class="request" type="button">
            Join
          </button>
        </div>
      </div>
      
    </div>

  )
}
