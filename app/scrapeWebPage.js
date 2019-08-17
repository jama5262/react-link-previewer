const getUrls = require('get-urls');
const cheerio = require('cheerio');

const axiosHandler = require('./axios.js');
const { checkForQuery, checkForUrls, checkForXFrameOptions } = require('./utils/validation.js');

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

exports.handler = async (request) => {
  try {
    await checkForQuery(request.query);
    const urls = Array.from(getUrls(request.query.text));
    await checkForUrls(urls);
    const requests = urls.map(async url => {
      const response = await axiosHandler.handler(url);
      let result = getHtmlContent(response.data)
      hasXframeOptions = await checkForXFrameOptions(response.headers);
      result["url"] = url
      result["hasXframeOptions"] = hasXframeOptions
      return result;
    });
    return Promise.all(requests);
  } catch (e) {
    return Promise.reject(e);
  }
}