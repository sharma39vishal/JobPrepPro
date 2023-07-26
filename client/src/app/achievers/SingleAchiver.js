import React from 'react'
import './Achievers.css'

export default function SingleAchiever(props) {
  return (
    <div className='achiever-single-story-main'>
      <div className="single-story-container">
        <div className="achiever-image-container">
          <img src={props.achiever_image} alt="" />
        </div>
        <div className="achiever-content-container">
          <div className="achiever-name-container">
            {props.achiever_name}
          </div>
          <div className="achiever-designation">
            {props.achiver_designation}
          </div>
          <div className="achiever-story">
            <p>{props.achiever_story.slice(0,500)} {props.achiever_story.length>500? "...":null}</p>
          </div>
          <div className="achiever-more">
            <div className="connect-to-achiever">
              <a href={props.connect} target='_blank'>Connect</a>
              {/* <img src="https://cdn-icons-png.flaticon.com/512/3128/3128219.png" alt="" /> */}
              <img src="https://cdn-icons-png.flaticon.com/512/3536/3536569.png" alt="" />
            </div>
            <div className="readmore-achiever">
              <button>Read More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
