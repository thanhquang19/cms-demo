import {React, useState, useRef} from 'react';
import {LoginEvent} from '../firebase';
//import { UseAuth } from '../firebase';
import './Login.css'

export default function Login(props) {

  const emailRef = useRef();
  const passwordRef = useRef();
  //const currentUser = UseAuth();
  const [errMsg, getErrMsg] = useState('   ');

  async function handleLogIn(e, email, password) {
    e.preventDefault();
  
    try{
      await LoginEvent(emailRef.current.value, passwordRef.current.value);
      
    } catch (err) {
      getErrMsg('unmatched email or password')
    }  
   
  }

  return (
    <div id='loginmodule'>
      
     

      <form id='loginform'>
      <h1>s.nails <span>cms</span> <span>by</span> <span>BobaCorp</span></h1>
        <br/>
        <input ref = {emailRef} type='email'  id='userEmail' placeholder='email@snail.com' required/>
        <br/>
        <input ref= {passwordRef} type='password' id='userPasword' placeholder='password' required/>
        <br/>
        <button type='submit' id='loginBttn' onClick={handleLogIn}>Log In</button>
        <p>{errMsg}</p>
    </form>
    </div>
  )
}