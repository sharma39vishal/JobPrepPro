import React from 'react'
import './PracticeSingle.css'
import Link from 'next/link'
export default function PracticeSingle(props) {
  return (
    <div className="single-practice-question-container">
        <h3 className='title-one1'><Link style={{color: '#000'}}href=''>{props.queTitle}</Link></h3>
        <h3 className='title-two2'>{props.queAccept}</h3>
        <h3 className='title-three3'>{props.queDifficulty}</h3>
    </div>
  )
}
