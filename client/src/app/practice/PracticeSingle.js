import React from 'react'
import './PracticeSingle.css'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
export default function PracticeSingle(props) {
  const router=useRouter();
  return (
    <div className="single-practice-question-container" style={{cursor:"pointer"}} onClick={()=>{router.push(`/practice/${props.quesid}`)}}>
        <h3 className='title-one1'><Link href=''>{props.queTitle}</Link></h3>
        <h3 className='title-two2'>{props.queAccept}</h3>
        <h3 className='title-three3'>{props.queDifficulty}</h3>
    </div>
  )
}
