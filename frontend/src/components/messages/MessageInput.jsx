import React, { useState } from 'react'
import useSendMessage from '../../hooks/useSendMessage'

const MessageInput = () => {
  const [message,setMessage] = useState("");
  const {loading,sendMessage}=useSendMessage();

  const handleSubmit=async(e)=>{
    e.preventDefault();
    if(!message) return;
    await sendMessage(message);
    setMessage("");
  }
  return (
    <form class="chat-form" onSubmit={handleSubmit}>
    <div class="form-group">
        <input
            type="text"
            class="message-input"
            placeholder="Send a message"
            value={message}
            onChange={(e)=>setMessage(e.target.value)}
        />
        <button type="submit" class="send-button">
            <span class="send-icon">➤</span>
        </button>
    </div>
</form>

  )
}

export default MessageInput
