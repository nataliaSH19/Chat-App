import React from 'react'
import "./Home.css"
import Sidebar from '../../components/sidebar/Sidebar'
import MessageContainer from '../../components/messages/MessageContainer'

const Home = () => {
  return (
    <div className='home-container'>
      <Sidebar/>
      <MessageContainer/>
    </div>
  )
}

export default Home
