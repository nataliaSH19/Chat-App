import React, { useState } from 'react'
import './SignUp.css'
import { Link } from 'react-router-dom'
import GenderCheckbox from './GenderCheckbox';
import useSignup from '../../hooks/useSignup';

const SignUp = () => {
    const [inputs,setInputs] = useState({
        fullName: "",
        username: "",
        password: "",
        confirmPassword: "",
        gender: "",
    });
    const{loading,signup} = useSignup()
    const handleCheckboxChange=(gender)=>{
        setInputs({...inputs, gender})
    }
    const handleSubmit = async(e) =>{
        e.preventDefault()
        await signup(inputs)
        console.log(inputs)
    }
  return (
    
        <div className='signup-container'>
      <div className='signup-box'>
        <h1 className='signup-title'>Sign Up
        <span className='highlight'>ChatApp</span></h1>
        <form onSubmit={handleSubmit}>
            <div className='input-group'>
                <label className='input-label'>
                    Full Name
                </label>
                <input type="text" placeholder='John Dom' className='input-field' value={inputs.fullName} onChange={(e)=>setInputs({...inputs, fullName: e.target.value})}/>
            </div>
            <div className='input-group'>
                <label className='input-label'>
                    Username
                </label>
                <input type="text" placeholder='johndom' className='input-field' value={inputs.username} onChange={(e)=>setInputs({...inputs, username: e.target.value})}/>
            </div>
            <div className='input-group'>
                <label className='input-label'>
                    Password
                </label>
                <input type="password" placeholder='Enter Password' className='input-field' value={inputs.password} onChange={(e)=>setInputs({...inputs, password: e.target.value})}/>
            </div>
            <div className='input-group'>
                <label className='input-label'>
                    Confirm Password
                </label>
                <input type="password" placeholder='Confirm Password' className='input-field' value={inputs.confirmPassword} onChange={(e)=>setInputs({...inputs, confirmPassword: e.target.value})}/>
            </div>
            <GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender}/>
            <Link to={'/login'} className='signup-link'>Already have an account?</Link>
            <div><button className='submit-button' disabled={loading}>Sign Up</button></div>
        </form>
      </div>
    </div>
    
  )
}

export default SignUp
