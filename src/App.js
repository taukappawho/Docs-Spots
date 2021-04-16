import './App.css';
import React, {useState, useEffect} from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import Profile from './components/pages/Profile';
import Chat from './components/pages/Chat';
import Nearby from './components/pages/Nearby';
import Reviews from './components/pages/Reviews';
import Log from './components/Log';
import Logout from './components/Logout';
import verifyId from './components/verifyId';
import AddReview from './components/AddReview';
import Review from './components/Review';
import {BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import axios from 'axios';

export default function App(){
  const [reviewPosts, setReviewPosts] = useState([])
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_SERVER_URL}/api/reviews`)
    .then(res => setReviewPosts(res.data))
    .catch(error => console.log(error));
  });

  return (
    <Router>
      <Navbar/>
        <h4><Log/></h4>
      <Switch>
        <Route path='/' exact component={Home} />
        <ProtectedRoute path='/profile' comp={Profile} />
        <ProtectedRoute path='/chat' comp={Chat} />
        <ProtectedRoute path='/nearby' comp={Nearby} />
        <Route exact path='/reviews' render={() => <Reviews reviewPosts={reviewPosts}/>}/>
        <Route path='/reviews/add-review' component={AddReview}/>
        <Route path='/reviews/:id' render={props => <Review {...props} reviewPosts={reviewPosts}/>}/>
        <Route path='*' component={Home} />
      </Switch>
      <Footer/>
    </Router>
  );
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