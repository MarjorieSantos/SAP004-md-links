const mdLinks = require('../index.js');
const validateHTTP = require('../src/validateHTTPS.js');
const readFileAt = require('../src/readFileAt.js');
const readDirectory = require('../src/readDirectory.js');
const filterMdFiles = require('../src/verify-archive.js');


const arrayLinksFormated = [
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
];

const arrayLinksFormatedWithValidate = [
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
]

describe('é um arquivo md', () => {
  it('se for um arquivo md, deve retornar true', () => {
    expect(filterMdFiles('test/mock.md')).toBe(true);
  });
});


//readDirectory
describe('mdLinks', () => {
  test('deve retornar uma função', (done) => {
    readDirectory('./test').then((linksFormated) => {
      expect(linksFormated).toEqual(arrayLinksFormated);
      done()
    });
  });
})

describe('error', () => {
  test('deve retornar um erro cajo não haja links no arquivo', (done) => {
    readFileAt('test/notFound.md').catch((err) => {
      expect(err).toEqual('Link não encontrado');
      done()
    });
  });
});


describe('status code HTTP error', () => {
  it('deve retornar uma mensagem de erro se o link demorar a carregar', () => {
    validateHTTP(['test/mock.md']).catch((err) => {
      expect(err).toEqual('o link demorou para carregar, por isso a requisição foi interrompida ')
    })
  });
})


//mdLinks
describe('mdLinks', () => {
  test('deve retornar uma função', (done) => {
    expect(typeof mdLinks).toBe('function');
    done()
  });
});

test('deve retornar o texto, o link e o arquivo', (done) => {
  mdLinks(['test/mock.md']).then((result) => {
    expect(result).toEqual(arrayLinksFormated);
    done()
  });
})

describe('the links validateHTTPS FILE', () => {
  test('deve retornar o texto, o link, o arquivo + VALIDAÇÃO', (done) => {
    mdLinks(['/test/mock.md', '--validate']).then((linksFormated) => {
      expect(linksFormated).toEqual(arrayLinksFormatedWithValidate)
      done()
    })
  });
})
