import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

class RichTextElementsBIU extends Component {

  stateToString = () => {
    return JSON.stringify(this.state)
  }

  loadRTEAnimations = () => {
    let innerVals = this.props.BIUBar;
    return (
      <Fragment>
        {this.props.BIUBar.boldClicked ?
          <div class='biu-div-clicked' onClick={(event) => this.props.boldButtonClicked()}>B</div>
        :
          <div class='biu-div' onClick={(event) => this.props.boldButtonClicked()}>B</div>
        }
        {this.props.BIUBar.italicClicked ?
          <div class='biu-div-clicked' onClick={(event) => this.props.italicButtonClicked()}>I</div>
        :
          <div class='biu-div' onClick={(event) => this.props.italicButtonClicked()}>I</div>
        }
        {this.props.BIUBar.underlineClicked ?
          <div class='biu-div-clicked' onClick={(event) => this.props.underlineButtonClicked()}>U</div>
        :
          <div class='biu-div' onClick={(event) => this.props.underlineButtonClicked()}>U</div>
        }
        {this.props.BIUBar.textColorClicked ?
          <div class='biu-div-clicked' onClick={(event) => this.props.textColorClicked()}>A</div>
        :
          <div class='biu-div' onClick={(event) => this.props.textColorClicked()}>A</div>
        }
      </Fragment>
    )
  }

  render() {
    return (
      this.loadRTEAnimations()
    );
  }
}

function msp(state) {
  return {
    BIUBar: state.BIUBar,
  }
}

function mdp(dispatch) {
  return {
    boldButtonClicked: (type) => {
      dispatch({type: "BOLD_BUTTON_CLICKED"})
    },
    italicButtonClicked: (type) => {
      dispatch({type: "ITALIC_BUTTON_CLICKED"})
    },
    underlineButtonClicked: (type) => {
      dispatch({type: "UNDERLINE_BUTTON_CLICKED"})
    },
    textColorClicked: (type) => {
      dispatch({type: "TEXTCOLOR_BUTTON_CLICKED"})
    },
  }
}


export default connect(msp, mdp)(RichTextElementsBIU)
