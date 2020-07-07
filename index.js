// const format = require('./src/format.js');
const fs = require('fs');
const readDirectory = require('./src/readDirectory.js');
const readFileAt = require('./src/readFileAt.js');
const validateHTTPS = require('./src/validateHTTPS.js');

const mdLinks = ([path, option]) => {
  return new Promise((resolve, reject) => {
    fs.stat(path, (err, stats) => {
      if (stats.isDirectory()) {
        console.log('é pasta')
        resolve(readDirectory(path));
      } else if (stats.isFile()) {
        console.log('é arquivo')
        resolve(readFileAt(path));
      } else {
        reject(erro);
      }
    })
  });
};
// readFileAt(path).then((linksFormated) => {
//   if (option === '--validate') {
//     const promises = [];
//     for (const link of linksFormated) {
//       promises.push(validateHTTPS(link.href));
//     }
//     return Promise.all(promises).then(results => {
//       results.forEach((status, index) => {
//         linksFormated[index].stats = status;
//       });
//       return resolve(linksFormated);
//     }).catch(err => {
//       console.log(err)
//       reject(err)
//     });
//   }
//   return resolve(linksFormated);
// });


module.exports = mdLinks;
