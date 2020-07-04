#!/usr/bin/env node

const mdLinks = require('./index.js');
const [, , ...args] = process.argv;

// console.log(args)ss
mdLinks(args)
  .then((result) => {
    result.forEach((archive) => {
      const link = `${archive.href} ➨  ${archive.text} ➨  ${archive.file} \n`
      // console.log(link);
    })
  })
  .catch(() => {
    console.log('não existem links nesse arquivo!');
  });

//https://x-team.com/blog/a-guide-to-creating-a-nodejs-command/
