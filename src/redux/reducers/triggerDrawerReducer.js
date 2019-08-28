const initialState = {
  showDrawer: false,
  drawerDirection: "left"
}

export default (state=initialState, action) => {
  switch (action.type) {
    case "OPEN_LEFT_DRAWER":
      state = { ...state, showDrawer: true, drawerDirection: "left" }
      break;
    case "OPEN_RIGHT_DRAWER":
      state = { ...state, showDrawer: true, drawerDirection: "right" }
      break;
    case "CLOSE_DRAWER":
      state = { ...state, showDrawer: false }
      break;
    default:
      break;
  }
  return state;
}