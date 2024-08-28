import React, { useRef, useEffect } from 'react';
import './Messages.css'
import Message from './Message'
import useGetMessages from '../../hooks/useGetMessages.js'
import useListenMessages from '../../hooks/useListenMessages.js';


const Messages = () => {
  const { messages, loading } = useGetMessages();
  useListenMessages()
  const lastMessageRef = useRef()
  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);
  return (
    <div className='messages'>
      {!loading &&
        messages.length > 0 &&
        messages.map((message) => (
          <div key={message._id} ref={lastMessageRef}>
            <Message message={message} />
          </div>
        ))}


      {!loading && messages.length === 0 && (
        <p className='text-center'>Send a message to start the conversation</p>
      )}
    </div>
  )
}

export default Messages
