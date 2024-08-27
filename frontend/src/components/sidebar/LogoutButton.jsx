import React from 'react'
import { CiLogout } from "react-icons/ci";
import './Sidebar.css'


const LogoutButton = () => {
  return (
    <div className='logout-container'>
      <CiLogout  className='logout'/>
    </div>
  )
}

export default LogoutButton
