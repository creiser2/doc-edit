import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreator from '../reducers/actions';
import Frame, { FrameContextConsumer } from 'react-frame-component';

const Header = ({ children }) => (
  <Frame>
    <h1>{children}</h1>
  </Frame>
);

const HeaderFrame = (props, context) => (
  //styles go in head somehow!
<Frame class='headerBox' head={
    <link type='text/css' href='../css/HeaderBox.css' />
    }>
  <FrameContextConsumer>
    {
      // Callback is invoked with iframe's window and document instances
      ({document, window}) => {
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
          <HeaderFrame>
            <Header>What</Header>
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
