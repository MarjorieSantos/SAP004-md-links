#!/usr/bin/env node

const mdLinks = require('./index.js');
const [, , ...args] = process.argv;

mdLinks(args)


//https://x-team.com/blog/a-guide-to-creating-a-nodejs-command/
