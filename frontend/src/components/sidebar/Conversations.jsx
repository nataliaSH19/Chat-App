import React from 'react'
import Conversation from './Conversation'
import './Sidebar.css'
import useGetConversations from '../../hooks/useGetConversations'

const Conversations = () => {
  const { loading, conversations } = useGetConversations();
  return (
    <div className='conversations-container'>
      {conversations.map((conversation) => (
        <Conversation key={conversation.id} conversation={conversation} />))
      }
      {loading ? <span className='loading loading-spinner'></span> : null}

    </div>
  )
}

export default Conversations
