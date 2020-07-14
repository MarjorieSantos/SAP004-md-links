const path = require("path");

const matchers = {
  regexLinks: /\((http.*)\)/,
  regexText: /\[(.[^\]]*)\]/,
}

const format = (links, relativePath) => {
  return links.map((link) => {
    const text = link.match(matchers.regexText)[1];
    const href = link.match(matchers.regexLinks)[1];
    const file = path.resolve(relativePath.replace('[]', ''));
    return { href, text, file };
  })
};

module.exports = format;
