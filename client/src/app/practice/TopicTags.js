import React from 'react'
import './PracticeSingle.css'

export default function TopicTags(props) {
  return (
    <div className="dynamic-topic-tags-container">
        <h6>{props.topicTag}</h6>
    </div>
  )
}
