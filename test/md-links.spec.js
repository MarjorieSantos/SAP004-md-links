const mdLinks = require('../index.js');
const fs = require('fs');
const path = require("path");

const readFile = jest.spyOn(fs, 'readFile')

const mockExample = `
  ***
  * [1. Prefácio](#1-prefácio)
  * [2. Lista de temporadas](#2-lista-de-temporadas)

  ## 1. Prefácio

  [The Walking Dead](https://thewalkingdead.com.br/) é uma série em quadrinhos publicada nos Estados Unidos pela Image Comics desde 8 de outubro de 2003 à 3 de julho de 2019.

  ### Algumas das temporadas

  * [1ª temporada](http://www.adorocinema.com/series/serie-7330/temporada-16736/)
  * [2ª temporada](http://www.adorocinema.com/series/serie-7330/temporada-18736/)
`

describe('mdLinks', () => {
  it('should be a function', () => {
    expect(typeof mdLinks).toBe('function');
  });
});


describe('the links are okay', () => {
  it('should be return a link, the title of the link and the file', () => {
    readFile.mockImplementationOnce((path, options, callback) => {
      path[0];
      callback(null, mockExample)
    });
    return expect(mdLinks(mockExample)).resolves.toEqual([
      { file: '', href: 'https://thewalkingdead.com.br/', text: 'The Walking Dead' },
      { file: '', href: 'http://www.adorocinema.com/series/serie-7330/temporada-16736/', text: '1ª temporada' },
      { file: '', href: 'http://www.adorocinema.com/series/serie-7330/temporada-18736/', text: '2ª temporada' },
    ]);
  })
});

// readFile.mockImplementationOnce((path, options, callback) => { callback('erro qualquer') })

describe('incorrect link', () => {
  it('should return an error if the link is incorrect', () => {
    expect(mdLinks(mockExample)).rejects.toEqual('Link não encontrado')
  });
});

