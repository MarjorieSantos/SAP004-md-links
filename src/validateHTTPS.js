const https = require('node-fetch');

const validateHTTPS = (path) => {
  return new Promise((resolve, reject) => {
    https(path).then((response) => {
      const statusMessage = response.statusText;
      const statusCode = response.status;
      const status = `${statusMessage} ${statusCode}`;
      resolve(status);
    })
      .catch((err) => {
        err = 'desculpe, não foi possível validar o link';
        reject(err);
      });
  });
};

module.exports = validateHTTPS;
