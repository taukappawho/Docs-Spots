import React from 'react';

class Home extends React.Component{
  constructor(props) {
      super(props);
      this.state = {
        activeView: 'home',
      };
  }
  render(){
      return(
          <div className="App-content">
          <h1>Welcome to Doc's Spots</h1>
          <div className="flex-container">
            <p align="center">This website is under construction! Check in later for updates!</p>
          </div>
        </div>
      );
  }
}
export default Home;