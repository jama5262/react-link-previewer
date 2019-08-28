const initialState = {
  data: [
    "http://unknownurl.com",
    "http://unknownurl.com"
  ]
}

export const unknownLinks = (state=initialState, action) => {
  switch (action.type) {
    case "CLEAR_QUERY":
      state = { ...state, data: []}
      break;
    default:
      break;
  }
  return state
}