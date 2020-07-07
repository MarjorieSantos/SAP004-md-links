const mdLinks = require('../index.js');

describe('mdLinks', () => {
  it('should be a function', () => {
    expect(typeof mdLinks).toBe('function');
  });
});


describe('the links are okay', () => {
  it('should be return a link, the title of the link and the file', () => {
    return expect(mdLinks('./mock.md')).resolves.toEqual([
      { file: '', href: 'https://thewalkingdead.com.br/', text: 'The Walking Dead' },
      { file: '', href: 'http://www.adorocinema.com/series/serie-7330/temporada-16736/', text: '1ª temporada' },
      { file: '', href: 'http://www.adorocinema.com/series/serie-7330/temporada-18736/', text: '2ª temporada' },
      { file: '', href: 'https://www.adorocinema.com/series/serie-7330/temporada-20603/', text: '3ª temporada' },
      { file: '', href: '      https://www.adorocinema.com/series/serie-7330/temporada-22184/', text: '4ª temporada' },
    ]);
  })
});


describe('incorrect link', () => {
  it('should return an error if the link is incorrect', () => {
    return expect(mdLinks('./mock.md')).rejects.toEqual('Link não encontrado')
  });
});

