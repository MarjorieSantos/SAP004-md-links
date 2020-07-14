const fs = require('fs');
const filterMdFiles = require('./verify-archive.js');
const readFileAt = require('./readFileAt.js');

const readDirectory = folder => {
  return new Promise((resolve, reject) => {
    const options = 'utf-8';
    fs.readdir(folder, options, (err, files) => {
      for (files of folder) {
        if (filterMdFiles(files) !== 'não é um arquivo md') {
          return resolve(readFileAt(`${folder}/${files}`))
        }
      }
      return reject(err)
    });
  });
};

module.exports = readDirectory;
