import React from 'react';

class Footer extends React.Component{
  constructor(props) {
      super(props);
      this.state = {
        activeView: 'home',
    };
  }
  render(){
    return (
        <footer className='footer'>
            <p>This is not a real website...Quit it</p>
        </footer>
    )
  }
};
export default Footer;