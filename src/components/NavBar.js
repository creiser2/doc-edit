import React, { Component } from 'react';

class NavBar extends Component {
  state = {
  }

  stateToString = () => {
    return JSON.stringify(this.state)
  }

  renderRichTextOptions = () => {
    //iterate over a list of installed rich text options
    return <div className="navElement">B</div>
  }


  render() {
    return (
      <div className="navBar">
        
      </div>
    );
  }
}


export default NavBar;
