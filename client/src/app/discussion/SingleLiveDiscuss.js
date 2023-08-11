import React from 'react'
import './Discussion.css'
export default function SingleLiveDiscuss(props) {
  return (
    <div onClick={() => {
      props.setimage(props.discussImage)
    }} className="live-discussion-description">
      <h3>{props.discussDescription}</h3>
    </div>
  )
}
