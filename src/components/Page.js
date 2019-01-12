import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreator from '../reducers/actions';
import Frame, { FrameContextConsumer } from 'react-frame-component';

//get the text from header, body, and footer when user clicks off
function extractContent(s) {
  var span = document.createElement('span');
  span.innerHTML = s;
  return span.textContent || span.innerText;
};


const headerClicked = (event) => {
  let extractedText = extractContent(event.target.innerHTML);
}

const bodyClicked = (event) => {
  let extractedText = extractContent(event.target.innerHTML);
}

const footerClicked = (event) => {
  let extractedText = extractContent(event.target.innerHTML);
}

const HeaderFrame = (props, context) => (
  //styles go in head somehow!
<Frame class='headerBox' head={
    <link type='text/css' href='../css/HeaderBox.css' />
    }>
  <FrameContextConsumer>
    {
      // Callback is invoked with iframe's window and document instances
      ({document, window}) => {
        document.addEventListener("click", headerClicked, false);
        document.designMode = 'On';
        // Render Children
      }
    }
  </FrameContextConsumer>
</Frame>
)


const BodyFrame = (props, context) => (
<Frame class='bodyBox' head={
      <link type='text/css' href='../css/BodyBox.css' />
    }>
  <FrameContextConsumer>
    {
      // Callback is invoked with iframe's window and document instances
      ({document, window}) => {
        document.addEventListener("click", bodyClicked, false);
        document.designMode = 'On';
        // Render Children
      }
    }
  </FrameContextConsumer>
</Frame>
)

const FooterFrame = (props, context) => (
<Frame class='footerBox' head={
      <link type='text/css' href='../css/FooterBox.css' />
    }>
  <FrameContextConsumer>
    {
      // Callback is invoked with iframe's window and document instances
      ({document, window}) => {
        document.addEventListener("click", footerClicked, false);
        document.designMode = 'On';
        // Render Children
      }
    }
  </FrameContextConsumer>
</Frame>
)


class Page extends Component {
  state = {
    header: "",
    body: "",
    footer: "",
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className="Page">
        <label>
          <HeaderFrame class='headerBox'>
          </HeaderFrame>
          <BodyFrame class='bodyBox'>
          </BodyFrame>
          <FooterFrame class='footerBox'>
          </FooterFrame>
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
