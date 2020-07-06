const format = require('./src/format.js');
const readFileAt = require('./src/readFileAt.js');
const validateHTTPS = require('./src/validateHTTPS.js');

const mdLinks = ([path, option]) => {
  return new Promise((resolve, reject) => {
    readFileAt(path).then((data) => {
      const mdString = data.toString();
      const regex = /\[(.[^\]]*)\]\((http.*)\)/gm;
      const links = mdString.match(regex);

      const linksFormated = format(links, path);

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

module.exports = mdLinks;

//validate == '--status'
//stats == '--validate'

//=> match  : [1], para retornar a segunda(indice2) do array que estava sendo retornado, com index, input, groups, etc. pegando assim apenas o link certinho
