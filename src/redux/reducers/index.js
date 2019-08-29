import { combineReducers } from "redux";

import { defaultLinks } from "./defaultLinksReducer"
import { previews } from "./previewsReducer"
import { query } from "./queryReducer"
import { recentLinks } from "./recentLinksReducer"
import { unknownLinks } from "./unknownLinksReducer"
import { drawerData } from "./triggerDrawerReducer"

export const reducer = combineReducers({
  defaultLinks,
  previews,
  query,
  recentLinks,
  unknownLinks,
  drawerData,
});