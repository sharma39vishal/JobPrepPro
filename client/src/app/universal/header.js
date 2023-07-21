import React from 'react'
import './Header.css'

export default function Header() {
  return (
    <div className='header-main'>
      <div className="navbar-container">
        <div className="nav-items-container">
          <div className="navbar-left-items">
            <div className="nav-left-single-item">
              <a href="/jobopening">Job Openings</a>
            </div>
            <div className="nav-left-single-item">
              <a href="/practice">Practice</a>
            </div>
            <div className="nav-left-single-item">
              <a href="/discussion">Discussion</a>
            </div>
            <div className="nav-left-single-item">
              <a href="/roadmap">Roadmap</a>
            </div>
            <div className="nav-left-single-item">
              <a href="/achievers">Achievers</a>
            </div>
          </div>
          <div className="navbar-logo">
            <a href="/home"><img src="https://icon-library.com/images/icon-logo-png/icon-logo-png-11.jpg" alt="Loading Error" /></a>
          </div>
          <div className="navbar-right-items">
            <div className="nav-right-developer">
              <a href="/developers">Developers</a>
            </div>
            <div className="nav-right-signin">
              <a href="/signin">Sign In</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
