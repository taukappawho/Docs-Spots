import React from 'react';

class Profile extends React.Component{
  constructor(props) {
      super(props);
      this.state = {
        activeView: 'profile',
      };
  }
  render(){
      return(
        <div className="App-content">
          <h1>Profile</h1>
          <div className="flex-container">
            <p align="center">This website is under construction! Check in later for updates!</p>
          </div>
        </div>
      );
  }
}
export default Profile;