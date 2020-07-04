const fs = require('fs');
const path = require("path");
const arr = [];

const format = (data, relativePath) => {
  const mdString = data.toString();
  const regex = /\[(.[^\]]*)\]\((http.*)\)/gm;
  const checkLink = mdString.match(regex);
  checkLink.forEach((links) => {
    const text = links.match(/\[(.[^\]]*)\]/)[1];
    const href = links.match(/\((http.*)\)/)[1];
    const file = path.resolve(relativePath[0].replace('[]', ''));
    arr.push({ href, text, file });
  });
  return arr;
};

const readFileAt = path => {
  return new Promise((resolve, reject) => {
    const options = 'utf-8';
    fs.readFile(path, options, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

const mdLinks = path => readFileAt(path[0]).then((data) => format(data, path));

module.exports = mdLinks;

//=> match  : [1], para retornar a segunda(indice2) do array que estava sendo retornado, com index, input, groups, etc. pegando assim apenas o link certinho
