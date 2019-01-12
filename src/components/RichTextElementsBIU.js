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

  handleBoldButtonClicked = () => {
    this.props.boldButtonClicked();
    this.updateInputText('bold');
  }

  handleItalicButtonClicked = () => {
    this.props.italicButtonClicked();
    this.updateInputText('italic');
  }

  handleUnderlineButtonClicked = () => {
    this.props.underlineButtonClicked();
    this.updateInputText('underline');
  }

  handleTextColorClicked = () => {
    this.props.textColorClicked();
    //implement box pop up
  }

  updateInputText = (command) => {
    this.props.iframes.headerBox.contentWindow.document.execCommand(command, false, null);
    this.props.iframes.bodyBox.contentWindow.document.execCommand(command, false, null);
    this.props.iframes.footerBox.contentWindow.document.execCommand(command, false, null);
  }

  loadRTEAnimations = () => {
    let innerVals = this.props.BIUBar;
    return (
      <Fragment>
        {this.props.BIUBar.boldClicked ?
          <img src={bold} className="biu_svg" onClick={(event) => this.handleBoldButtonClicked()}/>
        :
          <img src={unbold} className="biu_svg" onClick={(event) => this.handleBoldButtonClicked()}/>
        }
        {this.props.BIUBar.italicClicked ?
          <img src={italicized} className="biu_svg" onClick={(event) => this.handleItalicButtonClicked()}/>
        :
          <img src={un_italicized} className="biu_svg" onClick={(event) => this.handleItalicButtonClicked()}/>
        }
        {this.props.BIUBar.underlineClicked ?
          <img src={underlined} className="biu_svg" onClick={(event) => this.handleUnderlineButtonClicked()}/>
        :
          <img src={not_underlined} className="biu_svg" onClick={(event) => this.handleUnderlineButtonClicked()}/>
        }
        {this.props.BIUBar.textColorClicked ?
          <img src={text_color_clicked} className="biu_svg" onClick={(event) => this.handleTextColorClicked()}/>
        :
          <img src={text_color_unclicked} className="biu_svg" onClick={(event) => this.handleTextColorClicked()}/>
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
    iframes: state.iframes,
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
