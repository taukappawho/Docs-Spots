import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import Profile from './components/pages/Profile';
import Chat from './components/pages/Chat';
import Nearby from './components/pages/Nearby';
import Register_login from './components/pages/Register_login';
import Log from './components/Log';
import Logout from './components/Logout';
import verifyId from './components/verifyId';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App(){
  return (
    <Router>
      <Navbar/>
        <h4 id="Loginout"><Log/></h4>
      <Switch>
        <Route path='/' exact component={Home} />
        <ProtectedRoute path='/profile' comp={Profile} />
        <ProtectedRoute path='/chat' comp={Chat} />
        <ProtectedRoute path='/nearby' comp={Nearby} />
        <ProtectedRoute path='/Register_login' comp={Register_login} />
      </Switch>
      <Footer/>
    </Router>
  );
}
export default App;

window.onstorage = () => {
  if (!verifyId())
    Logout();
};


const ProtectedRoute = ({comp: Component, ...rest}) => (
  <Route
  {...rest}
  render={props =>
    sessionStorage.getItem('token') ? (<Component {...props} />) : (<Redirect to="/" />)
  }
  />
  );