import axios from "axios"

import { BASE_URL } from "../../utils/constants/baseUrlConstant"
import * as types from "../../utils/constants/actionConstants"

export const addQueryAction = text => ({ type: types.ADD_QUERY, text })
export const swapQueryAction = text => ({ type: types.SWAP_QUERY, text })
export const concatenateQueryAction = text => ({ type: types.CONCATENATE_QUERY, text })
export const clearQueryAction = () => ({ type: types.CLEAR_QUERY })
export const addPreviewAction = previews => ({ type: types.ADD_PREVIEW, previews })
export const addUnknownUrlsAction = unknownUrls => ({ type: types.ADD_UNKNOWN_URLS, unknownUrls })
export const addRecentsAction = text => ({ type: types.ADD_RECENTS, text })
export const clearRecentsAction = () => ({ type: types.CLEAR_RECENTS })
export const openLeftDrawerAction = () => ({ type: types.OPEN_LEFT_DRAWER })
export const openRightDrawerAction = () => ({ type: types.OPEN_RIGHT_DRAWER })
export const closeDrawerAction = () => ({ type: types.CLOSE_DRAWER })
export const scrapeWebsiteAction = () => {
  return (dispatch, getState) => {
    const { query } = getState()
    dispatch(clearQueryAction())
    axios({
      method: 'post',
      baseURL: BASE_URL,
      url: '/preview',
      params: {
        text: query
      }
    })
    .then((response) => {
      console.log(response.data.data.result);
      dispatch(addPreviewAction(response.data.data.result.knownUrls))
      dispatch(addUnknownUrlsAction(response.data.data.result.unknownUrls))
    })
    .catch((error) => {
      console.log(error.response.data)

    })
  }
}