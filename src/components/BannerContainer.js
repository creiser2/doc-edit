import React, { Component } from 'react';
import NavBar from './NavBar'
import RichTextEditBar from './RichTextEditBar'
import { connect } from 'react-redux';


class BannerContainer extends Component {
  render() {
    return (
      <div className="bannerContainer">
        <NavBar />
        <RichTextEditBar />
      </div>
    );
  }
}


function msp(state) {
  return {
  }
}

function mdp(dispatch) {
  return {
  }
}

export default connect(msp, mdp)(BannerContainer);
