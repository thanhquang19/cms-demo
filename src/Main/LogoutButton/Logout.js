import React from 'react';
import { LogoutEvent } from '../../firebase';


export default function Logout(props) {

  
  async function handleLogOut (e) {
    e.preventDefault();
    try {
      await LogoutEvent();
      sessionStorage.clear();
      //getErrMsg('');
   } catch (err) {
      //window.alert(err);
    }
  }


  return (
    <button type='submit' id='logoutBttn' onClick={handleLogOut}>Log Out</button>
  )
}
