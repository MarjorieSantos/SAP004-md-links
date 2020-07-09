const validateHTTPS = require('./validateHTTPS.js');

const validateArchive = (option, content) => {
  return new Promise((resolve) => {
    if (option === '--validate') {
      const promises = [];

      content.forEach((links) => {
        promises.push(validateHTTPS(links.href));
      })

      return Promise.all(promises)
        .then((results) => {
          console.log(results)
          results.forEach((status, index) => {
            content[index].stats = status;
          });
          return resolve(content);
        })
    }
    return resolve(content);
  })
}

module.exports = validateArchive;
