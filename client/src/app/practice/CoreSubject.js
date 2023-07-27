import React from 'react'
import './CoreSubject.css'

export default function CoreSubject(props) {
  return (
    <div className="core-subject-main-container">
        <div className="core-subject-layout">
            {props.subjectName}
        </div>
    </div>
  )
}
