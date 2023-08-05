import React from 'react'
import './CoreSubject.css'
import Link from 'next/link'

export default function CoreSubject(props) {
  return (
    <div className="core-subject-main-container">
      <div className="core-subject-layout">
        <Link href={props.pageLink}>{props.subjectName}</Link>
      </div>
    </div>
  )
}
