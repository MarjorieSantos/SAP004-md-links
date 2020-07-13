const fs = require('fs');
const readDirectory = require('./src/readDirectory.js');
const readFileAt = require('./src/readFileAt.js');
const validateArchive = require('./src/validateArchiveSelect.js');


const mdLinks = ([path, option]) => {
  return new Promise((resolve, reject) => {
    fs.stat(path, (err, stats) => {
      if (err) {
        err = 'não foi possível ler o arquivo/diretório';
        reject(err)
      } else if (stats.isDirectory()) {
        readDirectory(path).then((linksFormated) => {
          console.log(path)
          validateArchive(option, linksFormated).then((content) => {
            return resolve(content);
          })
        })
          .catch((err) => {
            err = 'não foi possível ler o arquivo/diretório'
            reject(err)
          })
      } else if (stats.isFile()) {
        readFileAt(path).then((linksFormated) => {
          validateArchive(option, linksFormated).then((content) => {
            console.log(content)
            return resolve(content);
          })
        }).catch((err) => {
          err = 'não foi possível ler o arquivo/diretório'
          reject(err)
        })
      }
    });
  });
};

module.exports = mdLinks;
