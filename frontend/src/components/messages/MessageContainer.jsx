import React from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import './Messages.css'
import { TiMessages } from "react-icons/ti";

const MessageContainer = () => {
  const noChatSelected = true;
  return (
    <div className='message-container'>
   {noChatSelected ? <NoChatSelected/> : (
      <>
      <div class="message-header">
      <span class="label-text">To:</span> 
      <span class="recipient-name">John Doe</span>
    </div>
          <Messages/>
          <MessageInput/>
      </>
   )}
    </div>
  )
}
const NoChatSelected = () => {
	
	return (
		<div class="no-chat-container">
    <div class="no-chat-content">
        <p>Welcome 👋 <span id="user-name">User Name</span> ❄</p>
        <p>Select a chat to start messaging</p>
        <div class="message-icon">
        <TiMessages />
        </div>
    </div>
</div>

	);
};

export default MessageContainer
