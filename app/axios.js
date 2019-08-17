const axios = require('axios');

exports.handler = async (url) => {
  console.log(url);
  return await axios.get(url);
}