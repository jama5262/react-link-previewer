const axios = require('axios');

exports.handler = async (url) => {
  try {
    return await axios.get(url);
  } catch (e) {
    throw {
      name: "Unknown URL",
      url
    }
  }
}