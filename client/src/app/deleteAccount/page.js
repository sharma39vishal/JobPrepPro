import React from 'react'
import './DeleteAccount.css'

export default function page() {
    return (
        <div className="outer-box">
            <div className="modal">
                <div className="image"><svg aria-hidden="true" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" fill="none">
                    <path d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" stroke-linejoin="round" stroke-linecap="round"></path>
                </svg></div>
                <div className="content">
                    <p className="title">Delete Account</p>
                    <p className="message">Are you sure you want to delete your account? All of your data will be permanently removed. This action cannot be undone.</p>
                </div>
                <div className="bottom-buttons">
                    <button className="delete-button" >Delete Account</button>
                    <button className="cancel-button">Cancel</button>
                </div>
            </div>
        </div>
    )
}
