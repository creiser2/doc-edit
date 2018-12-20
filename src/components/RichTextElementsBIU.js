import React, { Component, Fragment } from 'react';
import unbold from '../assets/unbolded.svg';
import bold from '../assets/bolded.svg';
import un_italicized from '../assets/un_italicized.svg';
import italicized from '../assets/italicized.svg';
import not_underlined from '../assets/not_underlined.svg';
import underlined from '../assets/underlined.svg';
import text_color_unclicked from '../assets/text_color_unclicked.svg';
import text_color_clicked from '../assets/text_color_clicked.svg';

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
          <img src={bold} className="biu_svg" onClick={(event) => this.props.boldButtonClicked()}/>
        :
          <img src={unbold} className="biu_svg" onClick={(event) => this.props.boldButtonClicked()}/>
        }
        {this.props.BIUBar.italicClicked ?
          <img src={italicized} className="biu_svg" onClick={(event) => this.props.italicButtonClicked()}/>
        :
          <img src={un_italicized} className="biu_svg" onClick={(event) => this.props.italicButtonClicked()}/>
        }
        {this.props.BIUBar.underlineClicked ?
          <img src={underlined} className="biu_svg" onClick={(event) => this.props.underlineButtonClicked()}/>
        :
          <img src={not_underlined} className="biu_svg" onClick={(event) => this.props.underlineButtonClicked()}/>
        }
        {this.props.BIUBar.textColorClicked ?
          <img src={text_color_clicked} className="biu_svg" onClick={(event) => this.props.textColorClicked()}/>
        :
          <img src={text_color_unclicked} className="biu_svg" onClick={(event) => this.props.textColorClicked()}/>
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
