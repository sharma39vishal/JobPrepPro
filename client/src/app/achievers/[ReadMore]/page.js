'use client'
import axios from 'axios'
import './readMore.css'
import React, { useEffect, useState } from 'react'
import Link from 'next/link';

export default function page({ params }) {
  const [readMoreData, setreadMoreData] = useState(null);
  useEffect(() => {
    axios.get(`/achiver/${params.ReadMore}`)
      .then((res) => {
        setreadMoreData(res.data);
        console.log(res.data);
      })

  }, []);

  return (
    <div className='achiever-read-more-page'>
      <div className="selected-achiever-page-container">
        <div className="achiever-fixed-section-container">
          <div className="achiever-fixed-image">
            <img src={readMoreData?.images} alt="" />
          </div>
          <div className="achiever-fixed-description">
            <h2>{readMoreData?.name}</h2>
            <h4>{readMoreData?.designation}</h4>
          </div>
          <div className="achiever-fixed-connect">
            <a href={readMoreData?.connect} target="_blank">Connect</a>
          </div>
        </div>
        <div className="achiever-dynamic-section-container">
          <p>{readMoreData?.discription}</p>
        </div>
      </div>
    </div>
  )
}
