import React, { Component } from 'react';
import { connect } from 'react-redux';

class Page extends Component {
  state = {
    header: "",
    body: "",
    footer: "",
  }

  componentDidMount() {
    this.setState({
      header: document.getElementById("headerBox"),
      body: document.getElementById("bodyBox"),
      footer: document.getElementById("footerBox")
    })
    this.enableEditMode();
  }

  handleTextEdit = inVal => {
    switch(inVal) {
      case "header":
        console.log("headerclicked")
        break;
      case "body":
        break;
      case "footer":
        break;
    }
  }

  enableEditMode = () => {
    header.document.designMode = 'On';
    body.document.designMode = 'On';
    footer.document.designMode = 'On';
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
  }
}

function mdp(dispatch) {
  return {
  }
}


export default connect(msp, mdp)(Page);
