import React, { Component, Fragment } from 'react';
import RichTextElementsBIU from './RichTextElementsBIU';
import FontSizeSelect from './FontSizeSelect';
import { connect } from 'react-redux';

class RichTextEditBar extends Component {
  state = {
  }

  stateToString = () => {
    return JSON.stringify(this.state)
  }

  renderRichButtons = () => {
    return (
      <Fragment>
        <div class='font-size-selector'><FontSizeSelect /></div>
        <div class='bold-italic-underline-holder'><RichTextElementsBIU /></div>
      </Fragment>
    )
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
