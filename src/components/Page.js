import React, { Component } from 'react';

class Page extends Component {
  state = {
    headerText: "",
    text: "",
    footerText: ""
  }



  handleTextEdit = inVal => {
    switch(inVal) {
      case "header":
        break;
      case "body":
        break;
      case "footer":
        break;
    }
  }

  stateToString = () => {
    return JSON.stringify(this.state)
  }


  render() {
    return (
      <div className="Page">
      <label>
        <iframe name="header" className="headerBox" onClick={this.handleTextEdit("header")}></iframe>
        <iframe name="body" className="bodyBox" onClick={this.handleTextEdit("body")}></iframe>
        <iframe name="footer" className="footerBox" onClick={this.handleTextEdit("footer")}></iframe>
      </label>
      </div>
    );
  }
}


export default Page;
