const path = require("path");
const arr = [];

const format = (links, relativePath) => {
  for (const link of links) {
    const text = link.match(/\[(.[^\]]*)\]/)[1];
    const href = link.match(/\((http.*)\)/)[1];
    const file = path.resolve(relativePath.replace('[]', ''));
    arr.push({ href, text, file });
  };
  return arr;
};

module.exports = format;
