import React from 'react';

class Chat extends React.Component{
  constructor(props) {
      super(props);
      this.state = {
        activeView: 'chat',
      };
  }
  render(){
      return(
          <div className="App-content">
          <h1>Chat</h1>
          <div className="flex-container">
            <p align="center">This website is under construction! Check in later for updates!</p>
          </div>
        </div>
      );
  }
}
export default Chat;