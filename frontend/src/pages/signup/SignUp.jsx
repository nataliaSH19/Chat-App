import React from 'react'
import './SignUp.css'

const SignUp = () => {
  return (
    
        <div className='signup-container'>
      <div className='signup-box'>
        <h1 className='signup-title'>Sign Up
        <span className='highlight'>ChatApp</span></h1>
        <form >
            <div className='input-group'>
                <label className='input-label'>
                    Full Name
                </label>
                <input type="text" placeholder='John Dom' className='input-field'/>
            </div>
            <div className='input-group'>
                <label className='input-label'>
                    Username
                </label>
                <input type="text" placeholder='johndom' className='input-field'/>
            </div>
            <div className='input-group'>
                <label className='input-label'>
                    Password
                </label>
                <input type="password" placeholder='Enter Password' className='input-field'/>
            </div>
            <div className='input-group'>
                <label className='input-label'>
                    Confirm Password
                </label>
                <input type="password" placeholder='Confirm Password' className='input-field'/>
            </div>
            
            <a href='#' className='signup-link'>Already have an account?</a>
            <div><button className='submit-button'>Sign Up</button></div>
        </form>
      </div>
    </div>
    
  )
}

export default SignUp
