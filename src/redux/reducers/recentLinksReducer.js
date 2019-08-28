const initialState = []

export const recentLinks = (state = initialState, action) => {
  switch (action.type) {
    case "CLEAR_RECENT_LINKS":
      return state
    default:
      return state
  }
}