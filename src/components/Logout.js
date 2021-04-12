import React, { useState } from 'react';
import { useGoogleLogout } from 'react-google-login';
import {Button} from './Button.js'

const clientId = process.env.REACT_APP_AUTH_CLIENT_ID;

function Logout(){
  const onLogoutSuccess = () => {
    sessionStorage.clear();
    window.location.reload();
  };
  const onFailure = () => {
    sessionStorage.clear();
    window.location.reload();
    console.log("Failure on logout");
  };
  const { signOut } = useGoogleLogout({
    clientId,
    onLogoutSuccess,
    onFailure,
  });
  return (
    <Button buttonStyle=".btn--large" onClick={ signOut } >Sign out</Button>
  );
}
export default Logout;