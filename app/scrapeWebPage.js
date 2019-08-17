const getUrls = require('get-urls');
const cheerio = require('cheerio');
const axiosHandler = require('./axios.js');

const getHtmlContent = (html) => {
  const $ = cheerio.load(html);
  const getMetatag = (name) =>
    $(`meta[name=${name}]`).attr('content') ||
    $(`meta[name="og:${name}"]`).attr('content') ||
    $(`meta[name="twitter:${name}"]`).attr('content');
  return {
    title: $('title').first().text(),
    favicon: $('link[rel="shortcut icon"]').attr('href'),
    description: getMetatag('description'),
    image: getMetatag('image'),
    author: getMetatag('author'),
  }
}

exports.handler = (data) => {
  try {
    const urls = Array.from(getUrls(data.query.text));
    if (urls.length == 0) {
      return Promise.reject("No urls found");
    }
    const requests = urls.map(async url => {
      const response = await axiosHandler.handler(url);
      let result = getHtmlContent(response.data)
      result["url"] = url
      return result;
    });
    return Promise.all(requests);
  } catch (e) {
    return Promise.reject(e);
  }
}