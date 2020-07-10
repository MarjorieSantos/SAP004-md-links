const path = require("path");
const arr = [];

const format = (links, relativePath) => {
  for (const link of links) {
    console.log(links)
    console.log(link)
    const text = link.match(/\[(.[^\]]*)\]/)[1];
    const href = link.match(/\((http.*)\)/)[1];
    const file = path.resolve(relativePath.replace('[]', ''));
    arr.push({ href, text, file });
  };
  return arr;
};

module.exports = format;


//=> match  : [1], para retornar a segunda(indice2) do array que estava sendo retornado, com index, input, groups, etc. pegando assim apenas o link certinho
