import React from 'react';
import { useGoogleLogin } from 'react-google-login';

const clientId = process.env.REACT_APP_AUTH_CLIENT_ID;

function Login(){
  const onSuccess = (res) => {
    sessionStorage.clear();
    var isLoggedIn = false;
    if (res.profileObj.email === "jirani@towson.edu" || res.profileObj.email.split("@")[1] === "students.towson.edu"){
      isLoggedIn = true;
      sessionStorage.setItem('email', res.profileObj.email);
      sessionStorage.setItem('name', res.profileObj.name);
      sessionStorage.setItem('token', res.tokenId);
      window.location.reload();
    }
    return isLoggedIn;
  };

  const onFailure = (res) => {
    return false;
  };

 const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    accessType: 'offline',
  });
  
 return (
    <button onClick={signIn}>
      <p>Google Signin</p>
    </button>
  );
}
export default Login;