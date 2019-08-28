const initialState = {
  text: ""
}

export const query = (state=initialState, action) => {
  switch (action.type) {
    case "ADD_QUERY":
      state = { ...state, text: action.text }
      break;
    case "CLEAR_QUERY":
      state = { ...state, text: "" }
      break;
    case "SWAP_QUERY":
      state = { ...state, text: action.text }
      break;
    case "CONCATENATE_QUERY":
      state = { ...state, text: state.text + " " + action.text }
      break;
    default:
      break;
  }
  return state
}