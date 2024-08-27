import React from 'react'
import './Login.css'

const Login = () => {
  return (
    <div className='login-container'>
      <div className='login-box'>
        <h1 className='login-title'>Login
        <span className='highlight'>ChatApp</span></h1>
        <form >
            <div className='input-group'>
                <label className='input-label'>
                    Username
                </label>
                <input type="text" placeholder='Enter username' className='input-field'/>
            </div>
            <div className='input-group'>
                <label className='input-label'>
                    Password
                </label>
                <input type="password" placeholder='Enter password' className='input-field'/>
            </div>
            <a href='#' className='signup-link'>Don't have an account</a>
            <div><button className='submit-button'>Login</button></div>
        </form>
      </div>
    </div>
  )
}

export default Login
