const getUrls = require('get-urls');

exports.handler = (data) => {
  const urls = Array.from(getUrls(data.query.text));
  console.log(urls);
  return JSON.stringify(data.route);
}