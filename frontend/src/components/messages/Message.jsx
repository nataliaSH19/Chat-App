import React from 'react'
import './Messages.css'
import { useAuthContext } from "../../context/AuthContext"
import useConversation from '../../zustans/useConversation';
import { extractTime } from '../../utils/extractTime';

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation()
  const formattedTime = extractTime(message.createdAt)
  const fromMe = message.senderId === authUser._id
  const chatClassName = fromMe ? "chat-end" : "chat-start"
  const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic
  const bgColor = fromMe ? "myBgColor" : ""

  return (
    <div className={`chat ${chatClassName}`}>
      {!fromMe && (
        <div className='chat-image avatar'>
          <img src={profilePic} alt="user avatar" className="avatar-img" />
        </div>
      )}
      <div>
        <div className={`chat-bubble ${bgColor}`}>
          {message.message}
        </div>
        <div className="chat-footer">
          {formattedTime}
        </div>
      </div>
      {fromMe && (
        <div className='chat-image avatar'>
          <img src={profilePic} alt="user avatar" className="avatar-img" />
        </div>
      )}
    </div>

  )
}

export default Message
