'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function page({params}){
    
    useEffect(() => {
        axios.get(`/discuss/${params.discuss}`)
        .then((res) => {
          console.log("SINGLE DISCUSSION",res.data);
        })
    }, []);

  return (
    <div>{params.discuss}</div>
  )
}
