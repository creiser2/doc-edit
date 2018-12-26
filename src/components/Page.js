import React, { Component } from 'react';

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
        <iframe id="headerBox" name="header" className="headerBox" scrolling="no" onClick={this.handleTextEdit("header")}></iframe>
        <iframe id="bodyBox" name="body" className="bodyBox" onClick={this.handleTextEdit("body")}></iframe>
        <iframe id="footerBox" name="footer" className="footerBox" onClick={this.handleTextEdit("footer")}></iframe>
      </label>
      </div>
    );
  }
}


export default Page;
