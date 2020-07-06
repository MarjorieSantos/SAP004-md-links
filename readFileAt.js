const fs = require('fs');

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

module.exports = readFileAt;
