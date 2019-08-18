const axios = require('axios');

exports.handler = async (url) => {
  try {
    const res = await axios.get(url);
    return res
  } catch (e) {
    throw {
      name: "Unknown URL",
      url
    }
  }
}