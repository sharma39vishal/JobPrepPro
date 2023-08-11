import React from 'react'
import './Discussion.css'
import Link from 'next/link'
export default function SingleLiveDiscuss(props) {
  return (
    <div onClick={() => {
      props.setimage(props.discussImage)
    }} className="live-discussion-description">
      <Link href=''><h3>{props.discussDescription}</h3></Link> 
    </div>
  )
}
