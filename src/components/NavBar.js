import React, { Component } from 'react';

class NavBar extends Component {
  state = {

  }

  stateToString = () => {
    return JSON.stringify(this.state)
  }

  renderRichTextOptions = () => {
    //iterate over a list of installed rich text options
    return <div className="navElement">R</div>
  }


  render() {
    return (
      <div className="navBar">
        {this.renderRichTextOptions()}
      </div>
    );
  }
}


export default NavBar;
