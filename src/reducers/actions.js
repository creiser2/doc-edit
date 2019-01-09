export const setHeaderBodyFooterElements = (head, body, foot) => {
  return {type: "SET_HBF_ELEMENTS", payload: {head: head, body: body, foot: foot}}
};


export const storeHeaderBodyFooter = (head, body, foot) => {
  return (dispatch) => {
    dispatch({
      type: "SET_HBF_ELEMENTS",
      payload: {head: head, body: body, foot: foot}
    })

    dispatch({
      type: "ENABLE_HBF_DESIGNMODE"
    })
  };
}
