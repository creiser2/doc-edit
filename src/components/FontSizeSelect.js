import React, { Component } from 'react';
import NavBar from './NavBar'
import RichTextEditBar from './RichTextEditBar'
import { connect } from 'react-redux';


class FontSizeSelect extends Component {

  //implement a drop down
  state = {
    num: [1,2,3,4,5,6,7],
    selected: 1
  }

  render() {
    return (
      <div class='font-size-selector'>11</div>
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

export default connect(msp, mdp)(FontSizeSelect);
