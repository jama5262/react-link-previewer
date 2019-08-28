import * as types from "../../utils/constants"

export const addQuery = text => ({ type: types.ADD_QUERY, text })
export const switchQuery = text => ({ type: types.SWITCH_QUERY, text })
export const clearQuery = () => ({ type: types.CLEAR_QUERY })
export const scrapeWebsite = text => ({ type: types.SCRAPE_WEBSITE, text })
export const addRecents = text => ({ type: types.ADD_RECENTS, text })
export const clearRecents = () => ({ type: types.CLEAR_RECENTS })
export const openLeftDrawer = () => ({ type: types.OPEN_LEFT_DRAWER })
export const openRightDrawer = () => ({ type: types.OPEN_RIGHT_DRAWER })
export const closeDrawer = () => ({ type: types.CLOSE_DRAWER })