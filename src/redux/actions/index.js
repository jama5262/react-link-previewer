import * as types from "../../utils/constants"

export const addQueryAction = text => ({ type: types.ADD_QUERY, text })
export const swapQueryAction = text => ({ type: types.SWAP_QUERY, text })
export const concatenateQueryAction = text => ({ type: types.CONCATENATE_QUERY, text })
export const clearQueryAction = () => ({ type: types.CLEAR_QUERY })
export const scrapeWebsiteAction = text => ({ type: types.SCRAPE_WEBSITE, text })
export const addRecentsAction = text => ({ type: types.ADD_RECENTS, text })
export const clearRecentsAction = () => ({ type: types.CLEAR_RECENTS })
export const openLeftDrawerAction = () => ({ type: types.OPEN_LEFT_DRAWER })
export const openRightDrawerAction = () => ({ type: types.OPEN_RIGHT_DRAWER })
export const closeDrawerAction = () => ({ type: types.CLOSE_DRAWER })