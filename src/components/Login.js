import React from 'react';
import { useGoogleLogin } from 'react-google-login';
import googleButton from './btn_google_signin_dark.png';
import axios from 'axios';

const clientId = process.env.REACT_APP_AUTH_CLIENT_ID;

function Login(){
  var user;
  var isLoggedIn = false;

  const onSuccess = (res) => {
    sessionStorage.clear();
    if (res.profileObj.email === "jirani@towson.edu" || res.profileObj.email.split("@")[1] === "students.towson.edu"){
      isLoggedIn = true;
      sessionStorage.setItem('email', res.profileObj.email);
      sessionStorage.setItem('name', res.profileObj.name);
      sessionStorage.setItem('token', res.tokenId);
      sessionStorage.setItem('image', res.profileObj.imageUrl)
      
      user = {
        name: sessionStorage.name.toString(),
        email: sessionStorage.email.toString(),
        imgURL: sessionStorage.image.toString(),
        username: "",
        phone: ""
      }

      axios.post(`http://localhost:5000/api/users/add`, user)           
      .then(res => {
        console.log(res.data)
        window.location.reload()
      })
      .catch(err => {
        console.log(err);
        window.location.reload();
      })
      
      //window.location.reload()
      return isLoggedIn;
    }
  };

  const onFailure = (res) => {
    return false;
  };

 const {signIn} = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    accessType: 'offline',
  });
  
 return (
    <button onClick={signIn}>
      <img src={googleButton}/>
    </button>
  );
}
export default Login;