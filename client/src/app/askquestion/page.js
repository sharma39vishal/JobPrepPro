import React from 'react'
import './Roadmap.css'
export default function Page() {
  return (
    <div className="askQuestion-page">
      <div className="askQuestion-design-container">

        {/* Left Side Container */}
        <div className="askQuestion-left-container">
          <div className="askQuestion-heading">
            <h2>Ask a public question</h2>
          </div>
          <div className="askQuestion-instruction">
            <h2>Writing a Good Question</h2>
            <ul>
              <li>Summarize your problem in a one-line title.</li>
              <li>Describe your problem in more detail.</li>
              <li>Describe what you tried and what you expected to happen</li>
              <li>Add “tags” which help surface your question to members of the community.</li>
              <li>Review your question and post it to the site.</li>
            </ul>
          </div>
          <div className="askQuestion-title">
            <input class="input" name="text" placeholder="Enter a attractive Title..." type="search" />
          </div>
          <div className="askQuestion-description">
            <textarea placeholder=' Enter the description...' name="AskDescription" id="AskDescription" 
            // cols="96" rows="8"
            style={{height:"20vh",width:"60vw",padding:"1em"}}
            ></textarea>
          </div>
          <div className="askquestion-tags">
            <input class="input" name="text" placeholder="Enter topic related tags..." type="search" />
          </div>
        </div>

        {/* Right Side Container */}
        <div className="askQuestion-right-container">
          <div className="askQuestion-moreDetails">
            <textarea placeholder=' What are your expectation from the problem?...' name="AskDescription" id="AskDescription"   style={{height:"20vh",width:"30vw",padding:"1em"}}></textarea>
          </div>
          <div className="sendIcon-image">
            <img src="/images/sendIcon.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}