import React from 'react'
import './Header.css'
import Link from 'next/link'

export default function Header() {
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
              <Link href="/signin">Sign In</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
