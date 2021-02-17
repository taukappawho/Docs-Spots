import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import Nav from './classes/nav';
import Footer from "./classes/footer";

ReactDOM.render(
  <React.StrictMode>
    <Nav/>
    <App/>
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);