'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './Discussion.css'
import SingleLiveDiscuss from './SingleLiveDiscuss';


export default function page() {
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
            <SingleLiveDiscuss setimage={setimage} discussDescription='Database Management System' discussImage='\images\dbmsDiscuss.png' />
            <SingleLiveDiscuss setimage={setimage} discussDescription='Data Structure And Algo.' discussImage='\images\dsa-discuss.jpg' />
            <SingleLiveDiscuss setimage={setimage} discussDescription='Computer Networks' discussImage='\images\networkDiscuss.png' />
            <SingleLiveDiscuss setimage={setimage} discussDescription='Operating Systems' discussImage='\images\OsDiscuss.jpg' />
            <SingleLiveDiscuss setimage={setimage} discussDescription='Object Oriented Programming' discussImage='\images\discussOops.png' />
          </div>
          <div className="live-discussion-image">
            <img src={image} alt="Loading Error" />
          </div>
        </div>
      </div>
    </div>
  )
}
