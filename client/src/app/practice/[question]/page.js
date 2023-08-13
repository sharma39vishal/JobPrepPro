'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function page({params}){
    const [content, setcontent] = useState([]);
    useEffect(() => {
        axios.get(`/questions/${params.question}`)
        .then((res) => {
          setcontent(res.data);
          console.log("SINGLE QUESTION",res.data);
        })
    }, []);

  return (
    <div style={{padding:"20vh"}}>
      <h1>Title</h1>
      {content?.Title}
      <h1>discription</h1>
      {content?.discription}
      <h1>Tags</h1>
      {content?.tags?.map(item=>{
       return  <p>{item}</p>
      })}
      <h1>Created at</h1>
      {content?.updated_at}

    </div>
  )
}
