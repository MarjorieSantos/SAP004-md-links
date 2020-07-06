const https = require('node-fetch');

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

//validate == '--status'
//stats == '--validate'

module.exports = validateHTTPS;