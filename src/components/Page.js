import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreator from '../reducers/actions';
import Frame, { FrameContextConsumer } from 'react-frame-component';
// import { HeaderFrame, BodyFrame, FooterFrame } from './frames/index'

//get the text from header, body, and footer when user clicks off



class Page extends Component {
  //I wonder if I could see if an iframe was clicked for the first time, after being unfocused, and then
  // do the execCommands based off of that? Maybe we call execCommand for all BIU elements on first click of iframe...

  //lastFocusTarget lets us save the text of the box that was clicked off... Pretty cool!
  state = {
    focusTarget: "",
    lastFocusTarget: "",
    headerText: "",
    bodyText: "",
    footerText: "",
    headerDoc: null,
    bodyDoc: null,
    footerDoc: null,
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
      lastFocusTarget: this.state.focusTarget,
      focusTarget: event.target,
    })
    this.setLastFocusText();
    if(this.firstTimeClicked("header")) {
      if(!this.state.headerDoc) {
        this.setState({
          headerDoc: event.target.parentNode
        })
      }
      this.executeBIUValues("body");
    }
  }

  //must throw exec command on specific frame for it to work
  executeBIUValues = (frame) => {
    // this.props.iframes.footerBox.contentWindow.document.execCommand(command, false, null)
    console.log(this.stateToString())
  }

  //basically check if this is an initial click, if it is... execute BIU values
  firstTimeClicked = (frame) => {
    return this.state.lastFocusTarget.id != frame
  }

  //body was clicked on
  bodyClicked = (event) => {
    event.target.id = "body";

    let extractedText = this.extractContent(event.target.innerHTML);
    this.setState({
      lastFocusTarget: this.state.focusTarget,
      focusTarget: event.target,
    })
    this.setLastFocusText();
    ///****event.target.parentNode will give the document node that we need
    if(this.firstTimeClicked("body")) {
      if(!this.state.bodyDoc) {
        this.setState({
          bodyDoc: event.target.parentNode
        })
      }
      this.executeBIUValues("body");
    }
  }

  //footer was clicked on
  footerClicked = (event) => {
    event.target.id = "footer";

    let extractedText = this.extractContent(event.target.innerHTML);
    this.setState({
      lastFocusTarget: this.state.focusTarget,
      focusTarget: event.target,
    })
    this.setLastFocusText();
    if(this.firstTimeClicked("footer")) {
      if(!this.state.footerDoc) {
        this.setState({
          footerDoc: event.target.parentNode
        })
      }
      this.executeBIUValues("body");
    }
  }

  //save the text of the last focused element to state... Could be useful later. But really we want to HTML to go to redux at this point too
  setLastFocusText = () => {
    let iframeName = this.state.lastFocusTarget.id + "Text";
    let iframeText = this.state.lastFocusTarget.innerText;
    debugger;
    this.setState({
      [iframeName]: iframeText,
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
