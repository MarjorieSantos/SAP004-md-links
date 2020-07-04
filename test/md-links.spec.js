const mdLinks = require('../index.js');
const fs = require('fs');

const readFile = jest.spyOn(fs, 'readFile')

const mock = `
  ***
  * [1. Prefácio](#1-prefácio)
  * [2. Lista de temporadas](#2-lista-de-temporadas)

  ## 1. Prefácio

  [The Walking Dead](https://thewalkingdead.com.br/) é uma série em quadrinhos publicada nos Estados Unidos pela Image Comics desde 8 de outubro de 2003 à 3 de julho de 2019. A história foi criada e escrita por Robert Kirkman e o desenhista Tony Moore, substituído por Charlie Adlard a partir da edição número 7. Na série, a história é focada em um grupo de sobreviventes liderados por um ex-oficial de polícia chamado Rick Grimes, que se unem na luta para superar o caos de zumbis.

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
      callback(null, mock)
    });
    return expect(mdLinks(mock)).resolves.toEqual([
      { href: 'https://thewalkingdead.com.br/', text: 'The Walking Dead' },
      { href: 'http://www.adorocinema.com/series/serie-7330/temporada-16736/', text: '1ª temporada' },
      { href: 'http://www.adorocinema.com/series/serie-7330/temporada-18736/', text: '2ª temporada' },

    ]);
  })
});

// readFile.mockImplementationOnce((path, options, callback) => { callback('erro qualquer') })

// describe('incorrect link', () => {
//   it('should return an error if the link is incorrect', () => {
//     expect(mdLinks('./test/mock.md')).rejects.toEqual('Link não encontrado')
//   });
// });

