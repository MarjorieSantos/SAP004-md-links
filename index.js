const fs = require('fs');
const http = require('https');
const path = require("path");
const { Console } = require('console');
const { response } = require('express');
const arr = [];

const format = (data, relativePath) => {
  const mdString = data.toString();
  const regex = /\[(.[^\]]*)\]\((http.*)\)/gm;
  const checkLink = mdString.match(regex);
  checkLink.forEach((links) => {
    const text = links.match(/\[(.[^\]]*)\]/)[1];
    const href = links.match(/\((http.*)\)/)[1];
    const file = path.resolve(relativePath.replace('[]', ''));
    arr.push({ href, text, file });
  });
  return arr;
};

const readFileAt = path => {
  return new Promise((resolve, reject) => {
    const options = 'utf-8';
    fs.readFile(path, options, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

// const options = {
//   validate:
// };

const mdLinks = ([path, option]) => {
  // console.log(path)
  // console.log(option)
  return readFileAt(path).then((data) => format(data, path));
}


const validateHTTP = (path) => {
  http.get(path, (resp) => {
    let error;
    let sucess;
    if (resp.statusCode >= 200 && resp.statusCode <= 299) {
      console.log(`${resp.statusMessage} ➨  ${resp.statusCode}`);
    } else {
      console.log(`${resp.statusMessage} ➨ ${resp.statusCode}`);
    }
  })
};
validateHTTP('https://thewalkingdead.com.br/')

// console.log(validateHTTP('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY'))
//validate == '--status'
//stats == '--validate'

module.exports = mdLinks;

//=> match  : [1], para retornar a segunda(indice2) do array que estava sendo retornado, com index, input, groups, etc. pegando assim apenas o link certinho
