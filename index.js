const fs = require('fs');
const http = require('https');
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

const validateHTTP = (path) => {
  return new Promise((resolve, reject) => {
    http.get(path, (resp) => {
      if (resp.statusCode >= 200 && resp.statusCode <= 399) {
        const status = `${resp.statusMessage} ${resp.statusCode}`;
        resolve(status);
      } else {
        const error = 'Invalid Link';
        reject(error);
      };
    });
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
          promises.push(validateHTTP(link.href));
        }
        return Promise.all(promises).then(results => {
          results.forEach((status, index) => {
            linksFormated[index].stats = status;
          });
          return resolve(linksFormated);
        })
      }
      return resolve(linksFormated);
    });
  });
};

module.exports = mdLinks;

//validate == '--status'
//stats == '--validate'

//=> match  : [1], para retornar a segunda(indice2) do array que estava sendo retornado, com index, input, groups, etc. pegando assim apenas o link certinho
