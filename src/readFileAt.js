const fs = require('fs');
const format = require('./format.js');

const readFileAt = path => {
  return new Promise((resolve, reject) => {
    const options = 'utf-8';
    fs.readFile(path, options, (err, data) => {
      if (err) {
        err = 'Link não encontrado';
        reject(err);
      } else {
        const mdString = data.toString();
        const regex = /\[(.[^\]]*)\]\((http.*)\)/gm;
        const links = mdString.match(regex);

        const linksFormated = format(links, path);
        // console.log(linksFormatehtd)
        resolve(linksFormated);
      };
    });
  });
};

module.exports = readFileAt;
