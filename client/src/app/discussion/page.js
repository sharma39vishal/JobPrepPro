'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './Discussion.css'

export default function page() {
  const [content, setcontent] = useState([]);
  const callapi = async () => {
    axios.get("/discuss/")
      .then((res) => {
        setcontent(res.data);
        console.log("Discussion :",res.data);
      })
      .catch((err) => {
        console.log(err)
      })
  }
  useEffect(() => {
    callapi();
  }, [])

    return (
        <div className='discussion-main'>
            <div className="discussion-section-1-container">
                Discussion page
            </div>
        </div>
    )
}
