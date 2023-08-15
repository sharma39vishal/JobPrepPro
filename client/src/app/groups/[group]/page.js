'use client'
import React, { useState, useEffect, useContext } from 'react';
import io from 'socket.io-client';
import './group.css'
import RightMessage from './RightMessage';
import LeftMessage from './LeftMessage';
import AuthContext from '@/app/Context/authContext';
// const socket = io.connect();
const socket = io.connect("http://localhost:5000/");

const Groups = ({params}) => {
  const { UserDetails} = useContext(AuthContext);
  const groupId  = params.group;
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([])
  }, [groupId])
  
  useEffect(() => {
    socket.on('message', (data) => {
      console.log(data)
      setMessages((prevMessages) => [...prevMessages, data]);
    });
    return () => {
      socket.disconnect();
    };
  }, []);

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(socket.id)
    if(!UserDetails){
      alert("Login Before Sending Message")
      return ;
    }
    if (message.trim()) {
      const data = {
        room: groupId,
        text: message,
        user: UserDetails.username,
        date: new Date()
      };
      socket.emit('message', data);
      setMessage('');
    }
  };

  return (
    <div>
      <section class="msger">
  <header class="msger-header">
    <div class="msger-header-title">
      <i class="fas fa-comment-alt"></i> {groupId} Discussion
    </div>
    <div class="msger-header-options">
      <span><i class="fas fa-cog"></i></span>
    </div>
  </header>
<div className='max-chat-size'>
  <main class="msger-chat">
  {messages?.map((message, index) => (
          <div class="msger-chat" key={index}>
            {message.user===UserDetails.username?<RightMessage message={message.text} date={message.date} name={message.user}/>:<LeftMessage message={message.text} date={message.date} name={message.user}/>}
             {/* <span>{message.text}</span> */}
          </div>
  ))}

  </main>
  </div>
  <form class="msger-inputarea" onSubmit={handleSubmit}>
  <input type="text" class="msger-input" value={message} onChange={handleInputChange} />
        <button class="msger-send-btn" type="submit">Send</button>
  </form>
</section>

     
    </div>
  );
};

export default Groups;
