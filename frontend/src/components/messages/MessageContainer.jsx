import React, { useEffect } from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import './Messages.css'
import { TiMessages } from "react-icons/ti";
import useConversation from '../../zustans/useConversation';
import { useAuthContext } from '../../context/AuthContext';

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    //cleanup function
    return () => setSelectedConversation(null)
  }, [setSelectedConversation])

  return (
    <div className='message-container'>
      {!selectedConversation ? <NoChatSelected /> : (
        <>
          <div class="message-header">
            <span class="label-text">To:</span>
            <span class="recipient-name">{selectedConversation.fullName}</span>
          </div>
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  )
}
const NoChatSelected = () => {
  const { authUser } = useAuthContext()
  return (
    <div class="no-chat-container">
      <div class="no-chat-content">
        <p>Welcome 👋 <span id="user-name">{authUser.fullName}</span></p>
        <p>Select a chat to start messaging</p>
        <div class="message-icon">
          <TiMessages />
        </div>
      </div>
    </div>

  );
};

export default MessageContainer
