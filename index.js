// const format = require('./src/format.js');
const readFileAt = require('./src/readFileAt.js');
const validateHTTPS = require('./src/validateHTTPS.js');

const mdLinks = ([path, option]) => {
  return new Promise((resolve, reject) => {
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
          console.log(err)
          reject(err)
        });
      }
      return resolve(linksFormated);
    });
  });
};

// const mdLinks = ([path, option]) => {
//   return new Promise((resolve, reject) => {
//     fs.stat(path, (err, stats) => {
//       if (stats.isDirectory()) {
//         resolve(readDirectory(path))
//       } else if (stats.isFile()) {
//         resolve(readFileAt(path))
//       } else {
//         reject(erro)
//       }
//     })

module.exports = mdLinks;


