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
    case "SET_HEADERBOX_ELEMENT":
      return {
        ...state, iframes: {...state.iframes, headerBox: action.payload}
      }

    case "SET_BODYBOX_ELEMENT":
      return {
        ...state, iframes: {...state.iframes, bodyBox: action.payload}
      }

    case "SET_FOOTERBOX_ELEMENT":
      return {
        ...state, iframes: {...state.iframes, footerBox: action.payload}
      }
    default:
      return state;
  }
}
