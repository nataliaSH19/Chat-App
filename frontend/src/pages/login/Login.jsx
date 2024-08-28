import React, { useState } from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import useLogin from '../../hooks/useLogin';

const Login = () => {
  const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
  const {loading,login} = useLogin();

  const handleSubmit=async(e)=>{
    e.preventDefault()
    await login(username,password)
  }
  return (
    <div className='login-container'>
      <div className='login-box'>
        <h1 className='login-title'>Login
        <span className='highlight'>ChatApp</span></h1>
        <form onSubmit={handleSubmit}>
            <div className='input-group'>
                <label className='input-label'>
                    Username
                </label>
                <input type="text" placeholder='Enter username' className='input-field' value={username} onChange={(e)=>setUsername(e.target.value)}/>
            </div>
            <div className='input-group'>
                <label className='input-label'>
                    Password
                </label>
                <input type="password" placeholder='Enter password' className='input-field' value={password} onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <Link to={'/signup'} className='signup-link'>Don't have an account</Link>
            <div><button className='submit-button' disabled={loading}>Login</button></div>
        </form>
      </div>
    </div>
  )
}

export default Login
