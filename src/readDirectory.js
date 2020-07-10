const fs = require('fs');
const filterMdFiles = require('./verify-archive.js');
const readFileAt = require('./readFileAt.js');

const readDirectory = folder => {
  return new Promise((resolve, reject) => {
    const options = 'utf-8';
    fs.readdir(folder, options, (err, files) => {
      for (let x = 0; x < files.length; x++) {
        if (filterMdFiles(files[x]) !== 'não é um arquivo md') {
          return resolve(readFileAt(`${folder}/${files[x]}`))
        }
      }
      return reject(err)
    });
  });
};

module.exports = readDirectory;
