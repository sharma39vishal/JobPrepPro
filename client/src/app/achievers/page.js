import React from 'react'
import SingleAchiever from './SingleAchiver'
// import './Achievers.css'

export default function page() {
  return (
    <div className='achievers-main'>
      <div className="achievers-section-1-container">
        <SingleAchiever achieverimage={'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600'} />
      </div>
    </div>
  )
}
