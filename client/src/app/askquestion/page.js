"use client"
import React, { useContext, useState } from 'react'
import './Roadmap.css'
import AuthContext from '../Context/authContext';

export default function Page() {
  const { UserDetails,call_again_getuser,setcall_again_getuser} = useContext(AuthContext);
  const [ question, setquestion] = useState({
    user_id:"",
    Title:"",
    discription:"",
    tags:[],
})

const [alltags, setalltags] = useState("");

const handleChange = e => {
  const { name, value } = e.target
  setquestion({
      ...question,
      [name]: value
  })
  // console.log(user)
}

async function addquestion() {
  try {
    // console.log("Chal Gaya",UserDetails)
    // console.log({alltags})
    var singletag="";
    for (let i = 0; i < alltags.length; i++) {
        if(alltags[i]==','){
          question.tags.push(singletag);
          singletag="";
        }
        else{
          singletag+=alltags[i];
        }
      }
      
      if(singletag.length){
        question.tags.push(singletag);
        singletag="";
      }
      
      
      if(!UserDetails){
        alert("Please Login Before asking Question")
        return;
      }
      
      setquestion({
        ...question,
        "user_id":UserDetails._id
      })
      if(!question.Title||!question.discription){
        alert("Fill Complete Details")
        return
      }
    await axios.post("/discuss/adddiscussion",question)
    .then((res)=>{alert("Question Added Successfully"); window.location.reload()});
  } catch (err) {
    console.error(err);
  }
}

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
            <input class="input" name="Title" value={question.Title} onChange={ handleChange } placeholder="Enter a attractive Title..." type="search" />
          </div>
          <div className="askQuestion-description">
            <textarea placeholder=' Enter the description...' id="AskDescription" 
            // cols="96" rows="8"
            name="discription" value={question.discription} onChange={ handleChange }
            style={{height:"20vh",width:"60vw",padding:"1em"}}
            ></textarea>
          </div>
          <div className="askquestion-tags">
            <input class="input" name="alltags" value={alltags} onChange={e=>setalltags(e.target.value)} placeholder="Enter topic related tags..." type="search" />
          </div>
        </div>

        {/* Right Side Container */}
        <div className="askQuestion-right-container">
          <div className="askQuestion-moreDetails">
            <textarea placeholder=' What are your expectation from the problem?...' name="AskDescription" id="AskDescription"   style={{height:"20vh",width:"30vw",padding:"1em"}}></textarea>
          </div>
          <div onClick={()=>{addquestion()}} className="sendIcon-image">
            <img src="/images/sendIcon.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}