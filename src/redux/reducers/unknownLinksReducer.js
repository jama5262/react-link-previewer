import * as types from "../../utils/constants/actionConstants"

const initialState = {
  data: []
}

export const unknownLinks = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_UNKNOWN_URLS:
      state = { ...state, data: action.unknownUrls }
      break;
    case types.CLEAR_QUERY:
      state = { ...state, data: [] }
      break;
    default:
      break;
  }
  return state
}