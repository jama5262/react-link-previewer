import * as types from "../../utils/constants/actionConstants"

const initialState = {
  text: ""
}

export const query = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_QUERY:
      state = { ...state, text: action.text }
      break;
    case types.CLEAR_QUERY:
      state = { ...state, text: "" }
      break;
    case types.SWAP_QUERY:
      state = { ...state, text: action.text }
      break;
    case types.CONCATENATE_QUERY:
      state = { ...state, text: state.text + " " + action.text }
      break;
    default:
      break;
  }
  return state
}