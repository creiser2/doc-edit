const defaultState = {
  BIUBar: {
    boldClicked: false,
    italicClicked: false,
    underlineClicked: false,
    textColorClicked: false,
  },
  iframes: {
    headerBox: "",
    bodyBox: "",
    footerBox: ""
  }
}


export default function reducer(state=defaultState, action) {
  switch(action.type) {
    //RTE BAR
    case "BOLD_BUTTON_CLICKED":
      return {
        ...state, BIUBar: {...state.BIUBar, boldClicked: !state.BIUBar.boldClicked}
      }
    case "ITALIC_BUTTON_CLICKED":
      return {
        ...state, BIUBar: {...state.BIUBar, italicClicked: !state.BIUBar.italicClicked}
      }
    case "UNDERLINE_BUTTON_CLICKED":
      return {
        ...state, BIUBar: {...state.BIUBar, underlineClicked: !state.BIUBar.underlineClicked}
      }
    case "TEXTCOLOR_BUTTON_CLICKED":
      return {
        ...state, BIUBar: {...state.BIUBar, textColorClicked: !state.BIUBar.textColorClicked}
      }
    //IFRAMES
    case "SET_HBF_ELEMENTS":
      return {
        ...state, iframes: {...state.iframes, headerBox: action.payload.head, bodyBox: action.payload.body, footerBox: action.payload.foot}
      }
    case "ENABLE_HBF_DESIGNMODE":
      let updatedBoxes = {
        newHeadBox: state.iframes.headerBox,
        newBodyBox: state.iframes.bodyBox,
        newFooterBox: state.iframes.footerBox
      }
      updatedBoxes.newHeadBox.contentWindow.document.designMode = 'On';
      updatedBoxes.newBodyBox.contentWindow.document.designMode = 'On';
      updatedBoxes.newFooterBox.contentWindow.document.designMode = 'On';
      return {
        ...state, iframes: {...state.iframes, headerBox: updatedBoxes.newHeadBox, bodyBox: updatedBoxes.newBodyBox, footerBox: updatedBoxes.newFooterBox}
      }
    default:
      return state;
  }
}
