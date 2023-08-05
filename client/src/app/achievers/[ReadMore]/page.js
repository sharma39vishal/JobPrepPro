'use client'
import axios from 'axios'
import './readMore.css'
import React, { useEffect, useState } from 'react'

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
      <div className="name-of-achiever">
        <h1>{readMoreData?.name}</h1>
      </div>
    </div>
  )
}
