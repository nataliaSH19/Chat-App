import React from 'react'
import { CiLogout } from "react-icons/ci";
import './Sidebar.css'
import useLogout from '../../hooks/useLogout';


const LogoutButton = () => {
  const {loading,logout} = useLogout();
  return (
    <div className='logout-container'>
      {!loading ? (
          <CiLogout  className='logout' onClick={logout}/>   
      ) : (
        <span className='loading loading-spinner'></span>
      )}
       </div>
      
  )
}

export default LogoutButton
