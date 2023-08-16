'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './QuestionOne.css'

export default function Page({ params }) {
  const [content, setcontent] = useState([]);
  useEffect(() => {
    axios.get(`/questions/${params.question}`)
      .then((res) => {
        setcontent(res.data);
        console.log("SINGLE QUESTION", res.data);
      })
  }, []);

  return (
    <div className="one-question-selected">
      <div className="innerSelected-question-container">
        <div className="questionOne-heading-section">
          <div className="question-titleOne">
            <h2>{content?.Title}</h2>
          </div>
          <div className="heading-components">
            <h3>{content?.difficulty}</h3>
            <h4><img src="/Images/likeButton.png" alt="" />1.8k</h4>
            <h4><img src="/Images/dislikeButton.png" alt="" />153</h4>
          </div>
        </div>
        <div className="questionOne-description-section">
          <h4>{content?.discription}</h4>
        </div>
        <div className="questionOne-example1-section">
          <div className="question-example">
            <h3>Example 1:</h3>
          </div>
          <div className="example-data">
            <h3>Input:</h3>
            <h4>{content?.input1}</h4>
            <br />
            <h3>Output:</h3>
            <h4>{content?.output1}</h4>
          </div>
        </div>
        <div className="questionOne-example2-section">
          <div className="question-example">
            <h3>Example 2:</h3>
          </div>
          <div className="example-data">
            <h3>Input:</h3>
            <h4>{content?.input2}</h4>
            <br />
            <h3>Output:</h3>
            <h4>{content?.output2}</h4>
          </div>
        </div>
        <div className="questionOne-constraints-section">
          <h3>Constraints</h3>
          <h4>{content?.constraints}</h4>
        </div>
        <div className="questionOne-extraDetails">
          <h3>Tags</h3>
          <h4>{content?.tags?.map((item, index) => {
            return <p key={index}>{item}</p>
          })}</h4>
          <h3>Created at</h3>
          <h4>{content?.updated_at}</h4>
        </div>
      </div>
    </div>
  )
}
