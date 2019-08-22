import { combineReducers } from "redux";

import defaultLinks from "./defaultLinksReducer"
import previews from "./previewsReducer"
import query from "./queryReducer"
import recentLinks from "./recentLinksReducer"
import unknownLinks from "./unknownLinksReducer"

export default combineReducers({
  defaultLinks,
  previews,
  query,
  recentLinks,
  unknownLinks
});