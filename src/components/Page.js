import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreator from '../reducers/actions';
import Frame, { FrameContextConsumer } from 'react-frame-component';
// import { HeaderFrame, BodyFrame, FooterFrame } from './frames/index'

//get the text from header, body, and footer when user clicks off



class Page extends Component {
  //I wonder if I could see if an iframe was clicked for the first time, after being unfocused, and then
  // do the execCommands based off of that? Maybe we call execCommand for all BIU elements on first click of iframe...
  
  //lastFocusEvent lets us save the text of the box that was clicked off... Pretty cool!
  state = {
    focusEvent: "",
    lastFocusEvent: "",
    header: "",
    body: "",
    footer: "",
  }

  //function strips text out of HTML
  extractContent = (s) => {
    var span = document.createElement('span');
    span.innerHTML = s;
    return span.textContent || span.innerText;
  };

  //header was clicked on
  headerClicked = (event) => {
    this.executeBIUValues();
    event.target.id = "header";

    let extractedText = this.extractContent(event.target.innerHTML);
    this.setState({
      lastFocusEvent: this.state.focusEvent,
      focusEvent: event.target,
    })
    this.setLastFocusText();
  }

  //must throw exec command on
  executeBIUValues = () => {

  }

  //body was clicked on
  bodyClicked = (event) => {
    event.target.id = "body";

    let extractedText = this.extractContent(event.target.innerHTML);
    this.setState({
      lastFocusEvent: this.state.focusEvent,
      focusEvent: event.target,
    })
    this.setLastFocusText();
  }

  //footer was clicked on
  footerClicked = (event) => {
    event.target.id = "footer";

    let extractedText = this.extractContent(event.target.innerHTML);
    this.setState({
      lastFocusEvent: this.state.focusEvent,
      focusEvent: event.target,
    })
    this.setLastFocusText();
  }

  //save the text of the last focused element to state... Could be useful later. But really we want to HTML to go to redux at this point too
  setLastFocusText = () => {
    let iframeName = this.state.lastFocusEvent.id;
    let iframeText = this.state.lastFocusEvent.innerText;
    this.setState({
      iframeName: iframeText,
    })
  }

  stateToString = () => {
    return JSON.stringify(this.state)
  }



  //the event handler works if all of these components are put back
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
