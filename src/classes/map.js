import React from 'react';

class Map extends React.Component{
  constructor(props) {
      super(props);
      this.state = {
        activeView: 'map',
      };
  }
  render(){
      return(
          <div className="App-content">
          <h1>Near You</h1>
          <div className="flex-container">
            <p align="center">This website is under construction! Check in later for updates!</p>
            <div>
              <iframe width="500" height="400" frameborder="0" src="https://www.bing.com/maps/embed?h=400&w=500&cp=39.398698652149086~-76.6038566685178&lvl=14&typ=d&sty=r&src=SHELL&FORM=MBEDV8" scrolling="no">
              </iframe>
              <div>
                  <a id="largeMapLink" target="_blank" href="https://www.bing.com/maps?cp=39.398698652149086~-76.6038566685178&amp;sty=r&amp;lvl=14&amp;FORM=MBEDLD">View Larger Map</a> &nbsp; | &nbsp;
                  <a id="dirMapLink" target="_blank" href="https://www.bing.com/maps/directions?cp=39.398698652149086~-76.6038566685178&amp;sty=r&amp;lvl=14&amp;rtp=~pos.39.398698652149086_-76.6038566685178____&amp;FORM=MBEDLD">Get Directions</a>
              </div>
            </div>
          </div>
        </div>
      );
  }
}
export default Map;