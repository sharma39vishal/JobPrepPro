import React from 'react'
import moment from 'moment';

export default function LeftMessage(props) {
  return (
         <div class="msg left-msg">
      <div
       class="msg-img"
        >
        <i  class="fa-solid fa-user"></i>

        </div>

      <div class="msg-bubble">
        <div class="msg-info">
          <div class="msg-info-name">{props.name}</div>
          <div class="msg-info-time">{moment.utc(props.date).local().startOf('seconds').fromNow()}</div>
        </div>

        <div class="msg-text">
            {props.message}
        </div>
      </div>
    </div>
  )
}
