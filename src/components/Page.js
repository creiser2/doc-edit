import React, { Component } from 'react';

class Page extends Component {
  state = {
    headerText: "",
    text: "",
    footerText: ""
  }


  handleHeaderTextEdit = event => {
    this.setState({
      headerText: event.target.value
    })
  }

  handleTextEdit = event => {
    switch(event.target.id) {
      case "header":
        this.setState({
          headerText: event.target.value
        })
        break;
      case "body":
        this.setState({
          text: event.target.value
        })
        break;
      case "footer":
        this.setState({
          footerText: event.target.value
        })
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
        <textarea id="header" type="text" className="headerBox" value={this.state.headerText} onChange={this.handleTextEdit} />
        <textarea id="body" type="text" className="bodyBox" value={this.state.text} onChange={this.handleTextEdit} />
        <textarea id="footer" type="text" className="footerBox" value={this.state.footerText} onChange={this.handleTextEdit} />
      </label>
      </div>
    );
  }
}


export default Page;
