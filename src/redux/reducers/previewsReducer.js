import * as types from "../../utils/constants/actionConstants"

const initialState = {
  data: []
}

export const previews = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_PREVIEW:
      state = { ...state, data: action.previews }
      break
    case types.CLEAR_QUERY:
      state = { ...state, data: [] }
      break
    default:
      break
  }
  return state
}