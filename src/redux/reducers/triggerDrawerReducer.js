import * as types from "../../utils/constants/actionConstants"

const initialState = {
  showDrawer: false,
  drawerDirection: "left"
}

export const drawerData = (state=initialState, action) => {
  switch (action.type) {
    case types.OPEN_LEFT_DRAWER:
      state = { ...state, showDrawer: true, drawerDirection: "left" }
      break;
    case types.OPEN_RIGHT_DRAWER:
      state = { ...state, showDrawer: true, drawerDirection: "right" }
      break;
    case types.CLOSE_DRAWER:
      state = { ...state, showDrawer: false }
      break;
    default:
      break;
  }
  return state;
}