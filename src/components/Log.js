import React from 'react';
import Login from './Login';
import Logout from './Logout';

export default function Log(){
  if (sessionStorage.token)
  return ( <p>Welcome {sessionStorage.name.substring(0,sessionStorage.name.indexOf(" "))} <Logout /></p>)
else return(<p><Login /></p> )
}
