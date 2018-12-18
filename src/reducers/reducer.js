const defaultState = {
  BIUBar: {
    boldClicked: false,
    italicClicked: false,
    underlineClicked: false,
    textColorClicked: false,
  }
}


export default function reducer(state = defaultState, action) {
  switch(action.type) {
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
    default:
      return state;
  }
}
