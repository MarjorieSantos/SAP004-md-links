const fs = require('fs');
const https = require('node-fetch');
const path = require("path");
const arr = [];

const format = (links, relativePath) => {
  for (const link of links) {
    const text = link.match(/\[(.[^\]]*)\]/)[1];
    const href = link.match(/\((http.*)\)/)[1];
    const file = path.resolve(relativePath.replace('[]', ''));
    arr.push({ href, text, file });
  };
  return arr;
};

const readFileAt = path => {
  return new Promise((resolve, reject) => {
    const options = 'utf-8';
    fs.readFile(path, options, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      };
    });
  });
};

const validateHTTPS = (path) => {
  return new Promise((resolve, reject) => {
    https(path).then((response) => {
      // console.log(response)
      const statusMessage = response.statusText;
      const statusCode = response.status;
      if (statusCode >= 200 && statusCode <= 599) {
        const status = `${statusMessage} ${statusCode}`;
        resolve(status);
      }
    })
  });
};

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
