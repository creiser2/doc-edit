import React, { Component } from 'react';

class RichTextEditBar extends Component {
  state = {
  }

  stateToString = () => {
    return JSON.stringify(this.state)
  }

  render() {
    return (
      <div className="richTextEdit">
      </div>
    );
  }
}


export default RichTextEditBar;
