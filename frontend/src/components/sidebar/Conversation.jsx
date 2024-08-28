import React from 'react'
import './Sidebar.css'
import useConversation from '../../zustans/useConversation'
import { useSocketContext } from '../../context/SocketContext';

const Conversation = ({ conversation }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  const isSelected = selectedConversation?._id === conversation._id
  const { onlineUsers } = useSocketContext()
  const isOnline = onlineUsers.includes(conversation._id)
  return (
    <>
      <div className={`user-card ${isSelected ? "selected-user-card" : ""}`} onClick={() => setSelectedConversation(conversation)}>
        <div className={`avatar ${isOnline ? "online" : ""}`}>
          <img src={conversation.profilePic} alt="user avatar" className="avatar-img" />
        </div>

        <div className="user-info">
          <div className="user-header">
            <p className="user-name">{conversation.fullName}</p>
          </div>
        </div>
      </div>

      <hr class="divider" />

    </>
  )
}

export default Conversation
