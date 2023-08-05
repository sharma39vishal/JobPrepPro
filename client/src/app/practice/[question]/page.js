'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function page({params}){
    
    useEffect(() => {
        axios.get(`/questions/${params.question}`)
        .then((res) => {
          console.log("SINGLE QUESTION",res.data);
        })
    }, []);

  return (
    <div>{params.question}</div>
  )
}
