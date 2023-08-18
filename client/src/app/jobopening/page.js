'use client'

import React, { useEffect, useState } from 'react';
import './Jobopening.css';

export default function JobOpening() {
  const calculateTimeLeft = () => {
    const launchDate = new Date('2023-09-01'); // Replace this with your launch date
    const currentDate = new Date();
    const difference = launchDate - currentDate;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="jobopening-outer-box">
      <div className="container">
      <div className="upper-txt">
           <p>We're Still</p>
         </div>
         <div className="middle-txt">
           <p>COMING SOON...</p>
         </div>
         <div className="lower-txt">
           <p>We're going to launch our website very soon. Stay tuned...</p>
         </div>
        <div className="time-container">
          {timeLeft.days !== undefined && (
            <>
              <div className="time">
                <p>{timeLeft.days}</p>
                <p>Days</p>
              </div>
              <div className="time">
                <p>{timeLeft.hours}</p>
                <p>Hours</p>
              </div>
              <div className="time">
                <p>{timeLeft.minutes}</p>
                <p>Minutes</p>
              </div>
              <div className="time">
                <p>{timeLeft.seconds}</p>
                <p>Seconds</p>
              </div>
            </>
          )}
        </div>
        <div className="top-buttons">
           <button className="button">
             <svg className="bell" viewBox="0 0 448 512"><path d="M224 0c-17.7 0-32 14.3-32 32V49.9C119.5 61.4 64 124.2 64 200v33.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416H424c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4V200c0-75.8-55.5-138.6-128-150.1V32c0-17.7-14.3-32-32-32zm0 96h8c57.4 0 104 46.6 104 104v33.4c0 47.9 13.9 94.6 39.7 134.6H72.3C98.1 328 112 281.3 112 233.4V200c0-57.4 46.6-104 104-104h8zm64 352H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z"></path></svg>
             Notify Me
           </button>
         </div>
      </div>
    </div>
  );
}
