const initialState = [
    {
      id: 1,
      text: "Chicago will test Samsung's DeX in-vehicle solution in cop cars https://www.engadget.com/2019/08/22/chicago-pd-dex-in-vehicle/"
    },
    {
      id: 2,
      text: "Apple Card isn't into leather https://www.cnet.com/news/apple-card-isnt-into-leather/"
    },
    {
      id: 3,
      text: "Earth’s future is being written in fast-melting Greenland https://www.denverpost.com/2019/08/21/greenland-glacier-climate-change/"
    }
    ,{
      id: 4,
      text: "Alien life breakthrough: NASA plans landmark mission to Europa in bid to find ET https://www.express.co.uk/news/science/1168499/nasa-alien-search-europa-jupiter-clipper-space-aliens-solar-system-life"
    }
    ,{
      id: 5,
      text: "Microsoft’s latest Surface updates are causing CPU and Wi-Fi issues https://www.theverge.com/2019/8/15/20807401/microsoft-surface-firmware-updates-wi-fi-problems-cpu-throttling"
    }
  ]

export const defaultLinks = (state=initialState, action) => {
  return state
}