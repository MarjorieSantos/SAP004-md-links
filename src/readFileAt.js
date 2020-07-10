const fs = require('fs');
const format = require('./format.js');
const filterMdLinks = require('./verify-archive.js');

const readFileAt = path => {
  return new Promise((resolve, reject) => {
    const options = 'utf-8';
    fs.readFile(path, options, (err, data) => {
      if (err) {
        err = 'Link não encontrado';
        reject(err);
      } else {
        if (filterMdLinks(path) !== 'não é um arquivo md') {
          const mdString = data.toString();
          const regex = /\[(.[^\]]*)\]\((http.*)\)/gm;
          const linksWithRegex = mdString.match(regex);

          const linksFormated = format(linksWithRegex, path);
          return resolve(linksFormated);
        } else {
          return reject(err);
        }
      };
    });
  });
};

module.exports = readFileAt;
