"use client"
import React, { useEffect, useState } from 'react'
import SingleAchiever from './SingleAchiver'
import './Achievers.css'
import axios from 'axios';



export default function page() {
  const [content, setcontent] = useState([]);

  const callapi=async ()=>{
    axios.get("http://localhost:5000/achiver/")
    .then((res)=>{
      setcontent(res.data);
    })
    .catch((err)=>{
      console.log(err)
    })
  }
  useEffect(() => {
    callapi();
  },[])
  

  return (
    <div className='achievers-main'>
      <div className="achievers-section-1-container">
        {content.map((item)=>{
         return <SingleAchiever achiever_image={item.images}
          achiever_name={item.name} achiver_designation={item.designation}
          achiever_story={item.discription}
          connect={item.connect} />
        })}
      </div>
    </div>
  )
}


