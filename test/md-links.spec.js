const mdLinks = require('../index.js');

describe('mdLinks', () => {
  it('should be a function', () => {
    expect(typeof mdLinks).toBe('function');
  });
});

describe('the links are okay', () => {
  it('should be return a link, the title of the link and the file', () => {
    expect(mdLinks('./mock.md')).resolves.toEqual([
      { href: 'https://thewalkingdead.com.br/', text: 'The Walking Dead' },
      { href: 'http://www.adorocinema.com/series/serie-7330/temporada-16736/', text: '1ª temporada' },
      { href: 'http://www.adorocinema.com/series/serie-7330/temporada-18736/', text: '2ª temporada' },
      { href: 'http://www.adorocinema.com/series/serie-7330/temporada-20603/', text: '3ª temporada' },
      { href: 'http://www.adorocinema.com/series/serie-7330/temporada-22184/', text: '4ª temporada' },
      { href: 'http://www.adorocinema.com/series/serie-7330/temporada-23750/', text: '5ª temporada' }
    ]);
  })
});

// describe('incorrect link', () => {
//   it('should return an error if the link is incorrect', () => {
//     expect(mdLinks('./test/mock.md')).rejects.toEqual('Link não encontrado')
//   });
// });

