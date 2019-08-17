const checkForXFrameOptions = async (headers) => {
  if(headers.hasOwnProperty("x-frame-options")) {
    return true
  }
  return false;
}

const checkForUrls = async (urls) => {
  if (urls.length == 0) {
    return Promise.reject({
      status: 422,
      message: "Please make sure to add a valid url"
    });
  }
}

const checkForQuery = async (query) => {
  if(!query.hasOwnProperty("text")) {
    return Promise.reject({
      status: 404,
      message: "Live Previewer did not receive any url texts"
    });
  }
  return true;
}

module.exports = {
  checkForXFrameOptions,
  checkForUrls,
  checkForQuery
}