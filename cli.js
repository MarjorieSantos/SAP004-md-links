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
    erro = 'não existem links nesse arquivo!'
    console.log(erro)
  });

//https://x-team.com/blog/a-guide-to-creating-a-nodejs-command/
