import React, { useState } from 'react'
import './CSS/LoginSignup.css';
const LoginSignup = () => {

  const [state,setState] = useState('Sign Up');
  const [formData, setFormData] = useState({
    username:"",
    password:"",
    email:""
  })
  const changeHandler = (e)=>{
    setFormData({...formData, [e.target.name]:e.target.value})
  }

  const login = async ()=>{
    let responseData;
    await fetch('http://localhost:4000/login',{
      method:'POST',
      headers:{
        Accept:'application/form-data',
        'Content-Type':'application/json',
      },
      body:JSON.stringify(formData),
    }).then((response)=>response.json()).then((data)=>responseData = data)
    
    if(responseData.success){
      localStorage.setItem('auth-token',responseData.token);
      window.location.replace('/');
    }
    else{
      alert(responseData.errors);
    }
  }
  const signup = async ()=>{
    let responseData;
    await fetch('http://localhost:4000/signup',{
      method:'POST',
      headers:{
        Accept:'application/form-data',
        'Content-Type':'application/json',
      },
      body:JSON.stringify(formData),
    }).then((response)=>response.json()).then((data)=>responseData = data)
    
    if(responseData.success){
      localStorage.setItem('auth-token',responseData.token);
      window.location.replace('/');
    }
    else{
      alert(responseData.errors);
    }
  }

  return (
    <div className='login-signup'>
      <div className="login-signup-container">
        <h1>{state}</h1>
        <div className="login-signup-fields">
          {state === "Sign Up"?<input name = 'username' value={formData.username} onChange={changeHandler} type="text" id="" placeholder='Enter name' required/>:<></>}
          <input name='email' value={formData.email} onChange={changeHandler} type="email" placeholder='Enter email' required />
          <input name='password' value={formData.password} onChange={changeHandler} type="password" id="" placeholder='Enter password' required />
          </div>
          <div className="login-signup-agree">
            <input type="checkbox" name="" id="" required />
            <p>I agree to the terms of use & privacy policy</p>
          </div>
          <button onClick={()=>{state === "Login"?login():signup()}}>Continue</button>
          {state === "Sign Up"?<p className="login-signup-login">
            Already have a account?<span onClick={()=>{setState('Login')}} style={{cursor:"pointer"}}>Login Here</span>
          </p>:<p className="login-signup-login">
            Don't have an account?<span onClick={()=>{setState("Sign Up")}} style={{cursor:"pointer"}}>Click here</span>
          </p>}
          
          
          
        </div>
      </div>
    
  )
}

export default LoginSignup
