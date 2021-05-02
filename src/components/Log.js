import React from 'react';
import '../App.css';
import Login from './Login';
import Logout from './Logout';

export default function Log(){
  if (sessionStorage.token)
  return ( <p className='login-text'>Welcome {sessionStorage.name.substring(0,sessionStorage.name.indexOf(" "))} <Logout /></p>)
else return(<p><Login /></p> )
}
