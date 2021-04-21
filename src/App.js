import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import Profile from './components/pages/Profile';
import Chat from './components/pages/Chat';
import Join from './components/pages/Join';
import Nearby from './components/pages/Nearby';
import Logout from './components/Logout';
import verifyId from './components/verifyId';
import {BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

export default function App(){
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home} />
        <ProtectedRoute path='/profile' comp={Profile} />
        <ProtectedRoute path='/join' comp={Join} />
        <ProtectedRoute path='/chat' comp={Chat} />
        <ProtectedRoute path='/nearby' comp={Nearby} /> 
        <Route path='*' component={Home} />
      </Switch>
      <Footer/>
    </Router>  
  )
}

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
