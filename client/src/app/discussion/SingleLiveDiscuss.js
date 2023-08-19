import React from 'react'
import './Discussion.css'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
export default function SingleLiveDiscuss(props) {
  const router=useRouter();
  return (
    <div onMouseMove={() => {
      props.setimage(props.discussImage)
    }} className="live-discussion-description">
      <div className='fix-width'>
      <Link href=''><h3>{props.discussDescription}</h3></Link> 
      </div>
      <div>
     
      {props.discussImage===props.image?<div>
        <button onClick={()=>{router.push(`/groups/${props.discussDescription}`)}}>JOIN</button>
      </div>:null}
      </div>
    </div>
  )
}
