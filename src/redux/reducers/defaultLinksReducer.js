const initialState = [
    {
      id: 1,
      text: "History In Pictures on Twitter: Michael Jackson drops the puck for a game between the Vancouver Canucks and the Pittsburgh Penguins. Vancouver, 1984 https://twitter.com/HistoryInPics/status/1163224194924064768"
    },
    {
      id: 2,
      text: "Busy older stars outpace stellar youngsters, new study shows https://phys.org/news/2019-08-busy-older-stars-outpace-stellar.html"
    },
    {
      id: 3,
      text: " Alien life breakthrough: NASA plans landmark mission to Europa in bid to find ET https://www.express.co.uk/news/science/1168499/nasa-alien-search-europa-jupiter-clipper-space-aliens-solar-system-life and followed by Earth’s future is being written in fast-melting Greenland https://www.denverpost.com/2019/08/21/greenland-glacier-climate-change/"
    }
    ,{
      id: 4,
      text: "Microsoft’s latest Surface updates are causing CPU and Wi-Fi issues https://www.theverge.com/2019/8/15/20807401/microsoft-surface-firmware-updates-wi-fi-problems-cpu-throttling"
    }
    ,{
      id: 5,
      text: "Gilbert Arenas lived on $400 monthly budget during time with Warriors https://sports.yahoo.com/gilbert-arenas-lived-400-monthly-040845290.html"
    }
  ]

export const defaultLinks = (state=initialState, action) => {
  return state
}