const fs = require('fs');
const arr = [];

const mdLinks = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path[0], 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        console.log(path);
        const mdString = data.toString();
        const regex = /\[(.[^\]]*)\]\((http.*)\)/gm;
        const checkLink = mdString.match(regex);
        checkLink.forEach((links) => {
          const text = links.match(/\[(.[^\]]*)\]/)[1];
          const href = links.match(/\((http.*)\)/)[1];
          const file = path[0].replace('[]', '');
          arr.push({ href, text, file });
        })
        resolve(arr);
      };
    });
  });
};

module.exports = mdLinks;

//=> match  : [1], para retornar a segunda(indice2) do array que estava sendo retornado, com index, input, groups, etc. pegando assim apenas o link certinho
