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
  }
}

const scrapeWebsite = async (urls) => {
  let unknownUrls = [];
  let knownUrls = [];
  for (let i = 0; i < urls.length; i++) {
    try {
      const response = await axiosHandler.handler(urls[i])
      let result = getHtmlContent(response.data)
      hasXframeOptions = await checkForXFrameOptions(response.headers);
      result["url"] = urls[i]
      result["hasXframeOptions"] = hasXframeOptions
      knownUrls.push(result);
    } catch (e) {
      if (e.name == "Unknown URL") {
        unknownUrls.push(e.url)
      } else {
        return Promise.reject({
          status: 500,
          message: e
        })
      }
    }
  }
  return {
    unknownUrls,
    knownUrls
  }
}

exports.handler = async (request) => {
  try {
    await checkForQuery(request.query);
    const urls = Array.from(getUrls(request.query.text));
    await checkForUrls(urls);
    return await scrapeWebsite(urls)
  } catch (e) {
    return Promise.reject(e);
  }
}