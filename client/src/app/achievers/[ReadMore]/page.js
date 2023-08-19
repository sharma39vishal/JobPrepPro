'use client'
import axios from 'axios'
import './readMore.css'
import React, { useEffect, useState } from 'react'
// import Link from 'next/link';

export default function Page({ params }) {
  const [readMoreData, setreadMoreData] = useState(null);
  useEffect(() => {
    axios.get(`/achiver/${params.ReadMore}`)
      .then((res) => {
        setreadMoreData(res.data);
        // console.log(res.data);
      })

  }, []);

  return (
    <div className='achiever-read-more-page'>
      <div className="selected-achiever-page-container">
        {/* <div className="before-fixed-achiever"></div> */}
        <div className="achiever-fixed-section-container">
          <div className="achiever-fixed-image">
            <img src={readMoreData?.images} alt="" />
          </div>
          <div className="achiever-fixed-description">
            <h2>{readMoreData?.name}</h2>
            <h4>{readMoreData?.designation}</h4>
          </div>
          <div className="achiever-fixed-connect">
            <a href={readMoreData?.connect} target="_blank">linked</a>
            <img src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png" alt="" />
          </div>
        </div>
        <div className="achiever-dynamic-section-container">
          <div className="fixed-inside-dynamic-achiever-before"></div>
          <p>{readMoreData?.discription}</p>
          <div className="fixed-inside-dynamic-achiever-after"></div>
        </div>
      </div>
    </div>
  )
}
