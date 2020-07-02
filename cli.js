#!/usr/bin/env node

const mdLinks = require('commander');
const package = require('./package.json');

mdLinks.version(package.version);

//add comando na CLI
mdLinks
  .command('add <check>')
  .description('Checando links do Markdown')
  .action((check) => {
    console.log(check);
  });

//A process.argv retorna uma matriz que contém os argumentos da linha de comando transmitidos quando o processo Node.js. for iniciado.
mdLinks.parse(process.argv);
