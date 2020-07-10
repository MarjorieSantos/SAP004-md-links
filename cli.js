#!/usr/bin/env node

const mdLinks = require('./index.js');
const [, , ...args] = process.argv;

mdLinks(args)
  .then((result) => {
    result.forEach((archive) => {
      const link = `${archive.file} ➨  ${archive.href} ${archive.stats ? ' ➨   ' + archive.stats : ''}  ➨  ${archive.text} \n`
      console.log(link);
    })
  })
  .catch((erro) => {
    erro = 'não foi possível ler o arquivo/diretório'
    console.log(erro)
  });

//https://x-team.com/blog/a-guide-to-creating-a-nodejs-command/
