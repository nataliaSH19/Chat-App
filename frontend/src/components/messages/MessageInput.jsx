import React from 'react'

const MessageInput = () => {
  return (
    <form class="chat-form">
    <div class="form-group">
        <input
            type="text"
            class="message-input"
            placeholder="Send a message"
        />
        <button type="submit" class="send-button">
            <span class="send-icon">➤</span>
        </button>
    </div>
</form>

  )
}

export default MessageInput
