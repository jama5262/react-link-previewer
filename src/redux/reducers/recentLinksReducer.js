const initialState = [
  {
    id: 1,
    text: "Chicago will test Samsung's DeX in-vehicle solution in cop cars https://www.engadget.com/2019/08/22/chicago-pd-dex-in-vehicle/"
  },
  {
    id: 2,
    text: "Apple Card isn't into leather https://www.cnet.com/news/apple-card-isnt-into-leather/"
  },
]

export const recentLinks = (state = initialState, action) => {
  switch (action.type) {
    case "CLEAR_RECENT_LINKS":
      return state
    default:
      return state
  }
}