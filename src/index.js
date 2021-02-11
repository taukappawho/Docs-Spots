import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import Nav from './classes/nav';

ReactDOM.render(
  <React.StrictMode>
    <Nav/>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);