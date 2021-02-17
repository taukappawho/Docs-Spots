import React from 'react';

class Nav extends React.Component{
  constructor(props) {
      super(props);
      this.state = {
        activeView: 'home',
      };
  }
  render(){
    return (
      <div>
        <ul>
          <li><a href="./">Home</a></li>
          <li><a href="./profile">Profile</a></li>
          <li><a href="./chat">Chat</a></li>
          <li><a href="./map">Map</a></li>
          <li>
            <label id='search' htmlFor='searchbar'>Search</label>
            <input className='searchbar' placeholder='Enter search item here'/>
          </li>
          <li><button>Register</button></li>
          <li><button>Login</button></li>
        </ul>
      </div>
    )
  }
};
export default Nav;