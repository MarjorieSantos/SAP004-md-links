const https = require('node-fetch');

const validateHTTPS = (path) => {
  return new Promise((resolve, reject) => {
    https(path).then((response) => {
      const statusMessage = response.statusText;
      const statusCode = response.status;
      if (statusCode >= 200 && statusCode <= 599) {
        const status = `${statusMessage} ${statusCode}`;
        resolve(status);
      }
    })
      .catch((err) => {
        err = 'o link demorou para carregar, por isso a requisição foi interrompida ';
        reject(err);
      });
  });
};

module.exports = validateHTTPS;
