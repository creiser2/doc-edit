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
<Frame>
  <FrameContextConsumer>
    {
      // Callback is invoked with iframe's window and document instances
      ({document, window}) => {
        // Render Children
        debugger;
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
          </HeaderFrame>
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
