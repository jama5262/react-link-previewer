const checkForXFrameOptions = async (headers) => {
  if(headers.hasOwnProperty("x-frame-options")) {
    return true
  }
  return false;
}

module.exports = {
  checkForXFrameOptions
}