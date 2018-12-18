import React, { Component } from 'react';
import NavBar from './NavBar'
import RichTextEditBar from './RichTextEditBar'

class BannerContainer extends Component {
  state = {
  }

  stateToString = () => {
    return JSON.stringify(this.state)
  }

  render() {
    return (
      <div className="bannerContainer">
        
      </div>
    );
  }
}


export default BannerContainer;
