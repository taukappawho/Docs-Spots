import React, { useState } from 'react';
import { useGoogleLogout } from 'react-google-login';
import {Button} from 'reactstrap'

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
    <Button color="warning" onClick={ signOut } >Sign out</Button>
  );
}
export default Logout;