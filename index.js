const fs = require('fs');
const readDirectory = require('./src/readDirectory.js');
const readFileAt = require('./src/readFileAt.js');
const validateArchive = require('./src/validateArchiveSelect.js');


const mdLinks = ([path, option]) => {
  return new Promise((resolve, reject) => {
    fs.stat(path, (err, stats) => {
      if (err) {
        err = 'não existem links nesse arquivo!';
        reject(err)
      } else if (stats.isDirectory()) {
        readDirectory(path).then((linksFormated) => {
          validateArchive(option, linksFormated).then((content) => {
            return resolve(content);
          })
        })
          .catch((err) => {
            err = 'não existem links nesse arquivo!'
            reject(err)
          })
      } else if (stats.isFile()) {
        readFileAt(path).then((linksFormated) => {
          validateArchive(option, linksFormated).then((content) => {
            return resolve(content);
          })
        }).catch((err) => {
          err = 'não existem links nesse arquivo!'
          reject(err)
        })
      }
    });
  });
};

module.exports = mdLinks;
