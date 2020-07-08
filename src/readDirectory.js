const fs = require('fs');
const path = require('path');
const readFileAt = require('./readFileAt.js');

const filterMdFiles = (file) => {
  return path.extname(file) === '.md';
}

const readDirectory = folder => {
  return new Promise((resolve, reject) => {
    const options = 'utf-8';
    fs.readdir(folder, options, (err, files) => {
      files.filter(filterMdFiles).reduce((file) => {
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
