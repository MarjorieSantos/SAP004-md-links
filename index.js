const fs = require('fs');
const readDirectory = require('./src/readDirectory.js');
const readFileAt = require('./src/readFileAt.js');
const validateHTTPS = require('./src/validateHTTPS.js');

const mdLinks = ([path, option]) => {
  console.log(option)
  return new Promise((resolve, reject) => {
    fs.stat(path, (err, stats) => {
      if (stats.isDirectory()) {
        readDirectory(path).then((linksFormated) => {
          if (option === '--validate') {
            const promises = [];
            for (const link of linksFormated) {
              promises.push(validateHTTPS(link.href));
            }
            return Promise.all(promises).then(results => {
              results.forEach((status, index) => {
                linksFormated[index].stats = status;
              });
              return resolve(linksFormated);
            }).catch(err => {
              console.log(err);
              reject(err);
            });
          };
          return resolve(linksFormated);
        });
      } else if (stats.isFile()) {
        readFileAt(path).then((linksFormated) => {
          if (option === '--validate') {
            const promises = [];
            for (const link of linksFormated) {
              promises.push(validateHTTPS(link.href));
            }
            return Promise.all(promises).then(results => {
              results.forEach((status, index) => {
                linksFormated[index].stats = status;
              });
              return resolve(linksFormated);
            }).catch(err => {
              console.log(err);
              reject(err);
            });
          };
          return resolve(linksFormated);
        });
      } else {
        reject(err);
      };
    });
  });
};

module.exports = mdLinks;
