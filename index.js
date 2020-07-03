// #!/usr/bin/env node

const fs = require('fs');
const { resolve } = require('path');
const { rejects } = require('assert');
const arr = [];

//err - retorno de algum erro;
//data - conteúdo do arquivo;
//path => arquivo de extenção .md

//gm =>  g => acha todas as correspondências em vez de parar após achar a primeira m => operar sobre múltiplas linhas, e não apenas o começo ou fim de toda a string de entrada

const mdLinks = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path[0], (err, data) => {
      if (err) {
        reject(console.log(err))
      } else {
        const mdString = data.toString();
        const regex = /[^!]\[(.[^\]]*)\]\(([^]\S+)\)/gm;
        const checkLink = mdString.match(regex);
        checkLink.forEach((links) => {
          const href = links.match(/\(([^]\S+)\)/)[1];
          const text = links.match(/(.[^\]]*)/)[1].replace('[', '');
          const file = path[0].replace('[]', '')
          arr.push({ href, text, file });
        })
        resolve(console.log(arr));
      };
    });
  });
};

//=> match  : [1], para retornar a segunda(indice2) do array que estava sendo retornado, com index, input, groups, etc. pegando assim apenas o link certinho

module.exports = mdLinks;
