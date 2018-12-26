import React, { Component } from 'react';
import { connect } from 'react-redux';

class Page extends Component {
  state = {
    header: "",
    body: "",
    footer: "",
  }

  componentDidMount() {
    this.props.setHeaderElement(document.getElementById("headerBox"));
    this.props.setBodyElement(document.getElementById("bodyBox"));
    this.props.setFooterElement(document.getElementById("footerBox"));
    //To fix most things, gooogle how to wait until after dispatch is finished in react
    // this.enableEditMode();
  }

  // handleTextEdit = inVal => {
  //   switch(inVal) {
  //     case "header":
  //       console.log("headerclicked")
  //       break;
  //     case "body":
  //       break;
  //     case "footer":
  //       break;
  //   }
  // }

  enableEditMode = () => {
    debugger;
    this.props.iframes.headerBox.contentWindow.document.designMode = 'On';
    this.props.iframes.bodyBox.contentWindow.document.designMode = 'On';
    this.props.iframes.footerBox.contentWindow.document.designMode = 'On';
  }


  render() {
    return (
      <div className="Page">
      <label>
        <iframe id="headerBox" name="header" className="headerBox" scrolling="no"></iframe>
        <iframe id="bodyBox" name="body" className="bodyBox" scrolling="no"></iframe>
        <iframe id="footerBox" name="footer" className="footerBox" scrolling="no"></iframe>
      </label>
      </div>
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
    setHeaderElement: (element) => {
      dispatch({type: "SET_HEADERBOX_ELEMENT", payload: element})
    },
    setBodyElement: (element) => {
      dispatch({type: "SET_BODYBOX_ELEMENT", payload: element})
    },
    setFooterElement: (element) => {
      dispatch({type: "SET_FOOTERBOX_ELEMENT", payload: element})
    },
  }
}


export default connect(msp, mdp)(Page);
