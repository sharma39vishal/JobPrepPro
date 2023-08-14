'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Page({params}){
  const [content, setcontent] = useState([]);
    useEffect(() => {
        axios.get(`/discuss/${params.discuss}`)
        .then((res) => {
          setcontent(res.data);
          console.log("SINGLE DISCUSSION",res.data);
        })
    }, []);

  return (
    <div style={{padding:"20vh"}}>
    <h1>Title</h1>
    {content?.Title}
    <h1>discription</h1>
    {content?.discription}
    <h1>Tags</h1>
    {content?.tags?.map((item,index)=>{
     return  <p key={index}>{item}</p>
    })}
    <h1>Created at</h1>
    {content?.updated_at}

  </div>

  )
}
