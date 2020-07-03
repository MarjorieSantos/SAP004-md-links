const fs = require('fs');
const arr = [];

//err - retorno de algum erro;
//data - conteúdo do arquivo;
//path => arquivo de extenção .md

//gm =>  g => acha todas as correspondências em vez de parar após achar a primeira m => operar sobre múltiplas linhas, e não apenas o começo ou fim de toda a string de entrada

const mdLinks = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path[0], 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        const mdString = data.toString();
        const regex = /\[(.[^\]]*)\]\((http.*)\)/gm;
        const checkLink = mdString.match(regex);
        checkLink.forEach((links) => {
          const text = links.match(/\[(.[^\]]*)\]/)[1];
          const href = links.match(/\((http.*)\)/)[1];
          const file = path[0].replace('[]', '');
          arr.push({ href, text, file });
        })
        resolve(arr);
      };
    });
  });
};

//=> match  : [1], para retornar a segunda(indice2) do array que estava sendo retornado, com index, input, groups, etc. pegando assim apenas o link certinho

module.exports = mdLinks;
