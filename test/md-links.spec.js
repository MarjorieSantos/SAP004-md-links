const mdLinks = require('../index.js');
const validateHTTP = require('../src/validateHTTPS.js');
const format = require('../src/format.js');
const readFileAt = require('../src/readFileAt.js');
const readDirectory = require('../src/readDirectory.js');

describe('mdLinks', () => {
  it('should be a function', () => {
    expect(typeof mdLinks).toBe('function');
  });
});

describe('mdLinks', () => {
  test('should be a function', (done) => {
    readDirectory('test/').then((result) => {
      return expect(result).toEqual([
        {
          file: 'C:\\Users\\Marjorie\\Documents\\repositorios\\SAP004-md-links\\test\\mock.md',
          href: 'https://thewalkingdead.com.br/',
          text: 'The Walking Dead'
        },
        {
          file: 'C:\\Users\\Marjorie\\Documents\\repositorios\\SAP004-md-links\\test\\mock.md',
          href: 'https://www.youtube.com/watch?v=DHQzM5Ee4cw',
          text: '10ª temporada - Trailer'
        },
        {
          file: 'C:\\Users\\Marjorie\\Documents\\repositorios\\SAP004-md-links\\test\\mock.md',
          href: 'https://www.youtube.com/watch?v=of-Bqmlgj98',
          text: '2ª temporada - abertura'
        },
      ])
    });
    done()
  });

});

const arrayTest = [
  '[The Walking Dead](https://thewalkingdead.com.br/)',
  '[10ª temporada - Trailer](https://www.youtube.com/watch?v=DHQzM5Ee4cw)',
  '[2ª temporada - abertura](https://www.youtube.com/watch?v=of-Bqmlgj98)'
]

describe('format', () => {
  it('should be a function', () => {
    expect(format(arrayTest, 'test/mock.md')).toEqual([
      {
        file: 'C:\\Users\\Marjorie\\Documents\\repositorios\\SAP004-md-links\\test\\mock.md',
        href: 'https://thewalkingdead.com.br/',
        text: 'The Walking Dead'
      },
      {
        file: 'C:\\Users\\Marjorie\\Documents\\repositorios\\SAP004-md-links\\test\\mock.md',
        href: 'https://www.youtube.com/watch?v=DHQzM5Ee4cw',
        text: '10ª temporada - Trailer'
      },
      {
        file: 'C:\\Users\\Marjorie\\Documents\\repositorios\\SAP004-md-links\\test\\mock.md',
        href: 'https://www.youtube.com/watch?v=of-Bqmlgj98',
        text: '2ª temporada - abertura'
      },
    ]);
  });
});


test('ler arquivo', (done) => {
  (readFileAt('test/mock.md')).then((linksFormated) => {
    return expect(linksFormated).toEqual([
      {
        file: 'C:\\Users\\Marjorie\\Documents\\repositorios\\SAP004-md-links\\test\\mock.md',
        href: 'https://thewalkingdead.com.br/',
        text: 'The Walking Dead'
      },
      {
        file: 'C:\\Users\\Marjorie\\Documents\\repositorios\\SAP004-md-links\\test\\mock.md',
        href: 'https://www.youtube.com/watch?v=DHQzM5Ee4cw',
        text: '10ª temporada - Trailer'
      },
      {
        file: 'C:\\Users\\Marjorie\\Documents\\repositorios\\SAP004-md-links\\test\\mock.md',
        href: 'https://www.youtube.com/watch?v=of-Bqmlgj98',
        text: '2ª temporada - abertura'
      },
    ]);
  });
  done()
})

test('the links are okay', (done) => {
  (mdLinks(['test/mock.md'])).then((result) => {
    return expect(result).toEqual([
      {
        file: 'C:\\Users\\Marjorie\\Documents\\repositorios\\SAP004-md-links\\test\\mock.md',
        href: 'https://thewalkingdead.com.br/',
        text: 'The Walking Dead'
      },
      {
        file: 'C:\\Users\\Marjorie\\Documents\\repositorios\\SAP004-md-links\\test\\mock.md',
        href: 'https://www.youtube.com/watch?v=DHQzM5Ee4cw',
        text: '10ª temporada - Trailer'
      },
      {
        file: 'C:\\Users\\Marjorie\\Documents\\repositorios\\SAP004-md-links\\test\\mock.md',
        href: 'https://www.youtube.com/watch?v=of-Bqmlgj98',
        text: '2ª temporada - abertura'
      },
    ]);
  });
  done()
})


// describe('the links are okay', () => {
//   it('should be return a link, the title of link and the file', () => {
//     (mdLinks(['test/mock.md', '--validate'])).then((result) => {
//       return expect(result).toEqual([
//         {
//           file: 'C:\\Users\\Marjorie\\Documents\\repositorios\\SAP004-md-links\\test\\mock.md',
//           href: 'https://thewalkingdead.com.br/',
//           stats: 'OK 200',
//           text: 'The Walking Dead'
//         },
//         {
//           file: 'C:\\Users\\Marjorie\\Documents\\repositorios\\SAP004-md-links\\test\\mock.md',
//           href: 'http://www.adorocinema.com/series/serie-7330/temporada-16736/',
//           stats: 'OK 200',
//           text: '1ª temporada'
//         },
//         {
//           file: 'C:\\Users\\Marjorie\\Documents\\repositorios\\SAP004-md-links\\test\\mock.md',
//           href: 'https://www.adorocinema.com/series/serie-7330/temporada-18736/',
//           stats: 'OK 200',
//           text: '2ª temporada'
//         },
//       ])
//     });
//   });
// })

describe('the links validateHTTPS', () => {
  it('should return the validation of the links + the message', () => {
    (validateHTTP(['test/mock.md'])).then((result) => {
      return expect(result).toEqual([
        {
          file: 'C:\\Users\\Marjorie\\Documents\\repositorios\\SAP004-md-links\\test\\mock.md',
          href: 'https://thewalkingdead.com.br/',
          stats: 'OK 200',
          text: 'The Walking Dead'
        },
        {
          file: 'C:\\Users\\Marjorie\\Documents\\repositorios\\SAP004-md-links\\test\\mock.md',
          href: 'https://www.youtube.com/watch?v=DHQzM5Ee4cw',
          stats: 'OK 200',
          text: '10ª temporada - Trailer'
        },
        {
          file: 'C:\\Users\\Marjorie\\Documents\\repositorios\\SAP004-md-links\\test\\mock.md',
          href: 'https://www.youtube.com/watch?v=of-Bqmlgj98',
          stats: 'OK 200',
          text: '2ª temporada - abertura'
        },
      ])
    })
  });
})

describe('the links validateHTTPS', () => {
  test('should return the validation of the links + the message', (done) => {
    (mdLinks(['test/', '--validate'])).then((result) => {
      return expect(result).toEqual([
        {
          file: 'C:\\Users\\Marjorie\\Documents\\repositorios\\SAP004-md-links\\test\\mock.md',
          href: 'https://thewalkingdead.com.br/',
          stats: 'OK 200',
          text: 'The Walking Dead'
        },
        {
          file: 'C:\\Users\\Marjorie\\Documents\\repositorios\\SAP004-md-links\\test\\mock.md',
          href: 'http://www.adorocinema.com/series/serie-7330/temporada-16736/',
          stats: 'OK 200',
          text: '1ª temporada'
        },
        {
          file: 'C:\\Users\\Marjorie\\Documents\\repositorios\\SAP004-md-links\\test\\mock.md',
          href: 'https://www.adorocinema.com/series/serie-7330/temporada-18736/',
          stats: 'OK 200',
          text: '2ª temporada'
        },
      ])
    })
    done()
  });
})

describe('error', () => {
  test('should return an error if not found links', (done) => {
    (mdLinks('test/vazio.md')).catch((err) => {
      return expect(err).toBe('não existem links nesse arquivo!');
    });
    done()
  });
});


describe('error', () => {
  test('should return an error if not found links', (done) => {
    (readFileAt('test/notFound.md')).catch((err) => {
      return expect(err).toBe('Link não encontrado');
    });
    done()
  });
});
