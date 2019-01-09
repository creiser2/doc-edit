import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreator from '../reducers/actions';

class Page extends Component {
  state = {
    header: "",
    body: "",
    footer: "",
  }

  componentDidMount() {
    let elements = {
      head: document.getElementById("headerBox"),
      body: document.getElementById("bodyBox"),
      foot: document.getElementById("footerBox")
    }
    this.props.storeHeaderBodyFooter(elements.head, elements.body, elements.foot);

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
    storeHeaderBodyFooter: (head, body, foot) => {
      dispatch(actionCreator.storeHeaderBodyFooter(head, body, foot))
    }
  }
}


export default connect(msp, mdp)(Page);
