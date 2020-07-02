// #!/usr/bin/env node

const fs = require('fs');
const arr = [];

//err - retorno de algum erro;
//data - conteúdo do arquivo;
//path => arquivo de extenção .md

//gm =>  g => acha todas as correspondências em vez de parar após achar a primeira m => operar sobre múltiplas linhas, e não apenas o começo ou fim de toda a string de entrada

const mdLinks = (path) => {
  fs.readFile(path[0], (err, data) => {
    if (err) {
      console.log(err);
    } else {
      const mdString = data.toString();
      const regex = /[^!]\[(.[^\]]*)\]\(([^#]\S+)\)/gm;
      const checkLink = mdString.match(regex);
      checkLink.forEach((links) => {
        console.log(links)
        // const href = links.match(/\(https|http.*\)/);
        // const text = links.match(/\[(\S.*)\]/);
        // console.log(links.href);
        // arr.push({ links });
        // console.log(arr)
        //   console.log(arr);
      })
    }
  });
};

module.exports = mdLinks;
