import React from 'react'
import './Messages.css'

const Message = () => {
  return (
    <div className='chat chat-end'>
      <div className='chat-image avatar'>
      <img src="https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png" alt="user avatar" class="avatar-img" />

      </div>
    <div>  
    <div class="chat-bubble">
        Hello, this is a chat message!
    </div>
    <div class="chat-footer">
        12:45 PM
    </div>
    </div>
    </div>
  
  )
}

export default Message
