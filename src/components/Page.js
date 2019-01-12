import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreator from '../reducers/actions';
import Frame, { FrameContextConsumer } from 'react-frame-component';

//get the text from header, body, and footer when user clicks off



class Page extends Component {
  state = {
    header: "",
    body: "",
    footer: "",
  }

  extractContent = (s) => {
    var span = document.createElement('span');
    span.innerHTML = s;
    return span.textContent || span.innerText;
  };

  headerClicked = (event) => {
    let extractedText = this.extractContent(event.target.innerHTML);
    console.log(extractedText)
  }

  bodyClicked = (event) => {
    let extractedText = this.extractContent(event.target.innerHTML);
    console.log(extractedText)
  }

  footerClicked = (event) => {
    let extractedText = this.extractContent(event.target.innerHTML);
    console.log(extractedText)
  }


  componentDidMount() {
  }

  render() {
    return (
      <div className="Page">
        <label>
          <Frame class='headerBox' head={
              <link type='text/css' href='../css/HeaderBox.css' />
              }>
            <FrameContextConsumer>
              {
                // Callback is invoked with iframe's window and document instances
                ({document, window}) => {
                  document.addEventListener("click", this.headerClicked, false);
                  document.designMode = 'On';
                  // Render Children
                }
              }
            </FrameContextConsumer>
          </Frame>
          <Frame class='bodyBox' head={
              <link type='text/css' href='../css/HeaderBox.css' />
              }>
            <FrameContextConsumer>
              {
                // Callback is invoked with iframe's window and document instances
                ({document, window}) => {
                  document.addEventListener("click", this.bodyClicked, false);
                  document.designMode = 'On';
                  // Render Children
                }
              }
            </FrameContextConsumer>
          </Frame>
          <Frame class='footerBox' head={
              <link type='text/css' href='../css/HeaderBox.css' />
              }>
            <FrameContextConsumer>
              {
                // Callback is invoked with iframe's window and document instances
                ({document, window}) => {
                  document.addEventListener("click", this.footerClicked, false);
                  document.designMode = 'On';
                  // Render Children
                }
              }
            </FrameContextConsumer>
          </Frame>
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
