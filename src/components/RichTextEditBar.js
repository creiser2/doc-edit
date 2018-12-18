import React, { Component, Fragment } from 'react';
import RichTextElementsBIU from './RichTextElementsBIU';
import { connect } from 'react-redux';

class RichTextEditBar extends Component {
  state = {
  }

  stateToString = () => {
    return JSON.stringify(this.state)
  }

  renderRichButtons = () => {
    return <div class='bold-italic-underline-holder'><RichTextElementsBIU /></div>
  }

  render() {
    return (
      <div className="richTextEdit">
        {this.renderRichButtons()}
      </div>
    );
  }
}

function msp(state) {
  return {
  }
}

function mdp(dispatch) {
  return {
  }
}


export default connect(msp, mdp)(RichTextEditBar);
