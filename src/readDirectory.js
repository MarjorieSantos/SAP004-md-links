// const fs = require('fs');
// const readFileAt = require('./src/readFileAt.js');

// const readDirectory = path => {
//   return new Promise((resolve, reject) => {
//     const options = 'utf-8';
//     fs.readdir(path, options, (err, data) => {
//       for (let x = 0; x < data.length; x++) {
//         if (path.extname(data[x]) === '.md') {
//           const pathArchive = `${file}/${data[x]}`;
//           resolve(readFileAt(pathArchive))
//         };
//       };
//     });
//   });
// };

// module.exports = readDirectory;
