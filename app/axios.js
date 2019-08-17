const axios = require('axios');

exports.handler = async (url) => {
  return await axios.get(url);
}