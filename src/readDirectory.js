const fs = require('fs');
const path = require('path');
const readFileAt = require('./readFileAt.js');

const filterMdFiles = (file) => {
  return path.extname(file) === '.md';
}

const readDirectory = folder => {
  return new Promise((resolve, reject) => {
    const options = 'utf-8';
    fs.readdir(folder, options, (err, files) => {
      files.filter(filterMdFiles).map((file) => {
        let arrayLinks = [];
        readFileAt(`${folder}/${file}`).then(linksFormated => {
          console.log(file)
          console.log(linksFormated)
        });
        return Promise.all(arrayLinks)
      })


      // .forEach((file) => {
      //   if (err) {
      //     reject(err)
      //   } else {
      //     let arrayLinks = files
      //     return Promise.all(arrayLinks)
      //   }
      // })

      // resolve(readFileAt(pathArchive))
      // for (let x = 0; x < data.length; x++) {
      //   if (path.extname(data[x]) === '.md') {
      //     const pathArchive = `${file}/${data[x]}`;
      //     console.log(pathArchive)
      //     resolve(readFileAt(pathArchive))
      //   };
      // };
    });
  });
};

module.exports = readDirectory;
