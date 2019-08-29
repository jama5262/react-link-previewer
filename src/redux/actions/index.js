import axios from "axios"

import { message } from 'antd';

import { BASE_URL } from "../../utils/constants/baseUrlConstant"
import * as types from "../../utils/constants/actionConstants"

export const addQueryAction = text => ({ type: types.ADD_QUERY, text })
export const swapQueryAction = text => ({ type: types.SWAP_QUERY, text })
export const concatenateQueryAction = text => ({ type: types.CONCATENATE_QUERY, text })
export const addPreviewAction = previews => ({ type: types.ADD_PREVIEW, previews })
export const addUnknownUrlsAction = unknownUrls => ({ type: types.ADD_UNKNOWN_URLS, unknownUrls })
export const addRecentsAction = text => ({ type: types.ADD_RECENTS, text })
export const openLeftDrawerAction = () => ({ type: types.OPEN_LEFT_DRAWER })
export const openRightDrawerAction = () => ({ type: types.OPEN_RIGHT_DRAWER })
export const closeDrawerAction = () => ({ type: types.CLOSE_DRAWER })
export const loadingAction = showLoading => ({ type: types.LOADING, showLoading })
export const clearQueryAction = () => {
  message.success("All clear 👌")
  return ({ type: types.CLEAR_QUERY })
}
export const scrapeWebsiteAction = () => {
  return (dispatch, getState) => {
    const { query } = getState()
    if (query.text.length > 0) {
      dispatch(addRecentsAction(query.text))
      message.warning("Let hope this works 🤞")
    }
    dispatch(loadingAction(true))
    axios({
      method: 'post',
      baseURL: BASE_URL,
      url: '/preview',
      params: {
        text: query.text
      }
    })
    .then((response) => {
      dispatch(addPreviewAction(response.data.data.result.knownUrls))
      dispatch(addUnknownUrlsAction(response.data.data.result.unknownUrls))
      message.success("Success 👍")
      dispatch(loadingAction(false))
    })
    .catch((error) => {

      if (error.response) {
        message.error(error.response.data.error.message + " 😣")
      } else {
        message.error(error.message + " 💀")
      }
      
      dispatch(loadingAction(false))
    })
  }
}