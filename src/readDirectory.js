const fs = require('fs');
const filterMdFiles = require('./verify-archive.js');
const readFileAt = require('./readFileAt.js');

const readDirectory = folder => {
  return new Promise((resolve, reject) => {
    const options = 'utf-8';
    fs.readdir(folder, options, (err, files) => {
      files.filter(filterMdFiles).reduce((file) => {
        let arrayLinks = [];
        readFileAt(`${folder}/${file}`).then(linksFormated => {
          if (err) {
            reject(err)
          } else {
            resolve(linksFormated)
          }
        });
        return Promise.all(arrayLinks)
      })
    });
  });
};

module.exports = readDirectory;
