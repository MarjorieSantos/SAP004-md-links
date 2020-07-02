// #!/usr/bin/env node

const fs = require('fs');
const arr = [];

//err - retorno de algum erro;
//data - conteúdo do arquivo;
//path => arquivo de extenção .md

const mdLinks = (path) => {
  fs.readFile(path[0], (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data.toString())
      // data.forEach((links) => {
      //   console.log(links.href);
      // })
    }
  });
  console.log(path[0]);
};

module.exports = mdLinks;

