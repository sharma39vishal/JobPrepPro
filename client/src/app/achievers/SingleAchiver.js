import React from 'react'
import './Achievers.css'

export default function SingleAchiever(props) {
  return (
    <div className='achiever-single-story-main'>
      <div className="single-story-container">
        <div className="achiever-image-container">
          <img src={props.achieverimage} alt="" />
        </div>
        <div className="achiever-content-container">
          achiever
        </div>
      </div>
    </div>
  )
}
