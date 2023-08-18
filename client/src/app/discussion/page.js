'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './Discussion.css'
import SingleLiveDiscuss from './SingleLiveDiscuss';
import { useRouter } from 'next/navigation';


export default function Page() {
  const router=useRouter();
  const [content, setcontent] = useState([]);
  const callapi = async () => {
    axios.get("/discuss/")
      .then((res) => {
        setcontent(res.data);
        console.log("Discussion :", res.data);
      })
      .catch((err) => {
        console.log(err)
      })
  }
  useEffect(() => {
    callapi();
  }, [])
  const [image, setimage] = useState('/images/dbmsDiscuss.png');
  return (
    <div className='discussion-main'>
      <div className="discussion-section-1-container">
        <h2>Click below links to join Live Discussion</h2>
        <div className="live-single-discuss-container">
          <div className='discussion-description'>
            <SingleLiveDiscuss image={image} setimage={setimage} discussDescription='Database_Management_System' discussImage='\images\dbmsDiscuss.png' />
            <SingleLiveDiscuss image={image} setimage={setimage} discussDescription='Data_Structure_And_Algo.' discussImage='\images\dsa-discuss.jpg' />
            <SingleLiveDiscuss image={image} setimage={setimage} discussDescription='Computer_Networks' discussImage='\images\networkDiscuss.png' />
            <SingleLiveDiscuss image={image} setimage={setimage} discussDescription='Operating_Systems' discussImage='\images\OsDiscuss.jpg' />
            <SingleLiveDiscuss image={image} setimage={setimage} discussDescription='Object_Oriented_Programming' discussImage='\images\discussOops.png' />
          </div>
          <div className="live-discussion-image">
            <img src={image} alt="Loading Error" />
          </div>
        </div>
      </div>

      {/* Section 2 Discussion Page */}
      <div className="discussion-section-2-container">
            {content.map((item,index)=>{
              return  (<div key={index} style={{cursor:"pointer"}} onClick={()=>{router.push(`/discussion/${item._id}`)}}>
              <h3 className='title-one1'><p>{item.Title}</p></h3>
          </div>)
            })}
      </div>
    </div>
  )
}
