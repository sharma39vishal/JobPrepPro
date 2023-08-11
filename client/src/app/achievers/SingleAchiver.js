import React from 'react'
import './Achievers.css'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function SingleAchiever(props) {
  const router = useRouter();
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
            <p>{props.achiever_story.slice(0, 500)} {props.achiever_story.length > 500 ? " ..." : null}</p>
          </div>
          <div className="achiever-more">
            <div className="connect-to-achiever">
              <Link href={props.connect} target='_blank'>linked</Link>
              {/* <img src="https://cdn-icons-png.flaticon.com/512/3128/3128219.png" alt="" /> */}
              <img src="https://cdn-icons-png.flaticon.com/512/3536/3536569.png" alt="" />
            </div>
            <div className="readmore-achiever">
              {props.achiever_story.length > 500 ? <button onClick={()=>router.push(`/achievers/${props.id}`)}>Read More</button> : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
