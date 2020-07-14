const mdLinks = require('../index.js');
const validateHTTP = require('../src/validateHTTPS.js');
const readFileAt = require('../src/readFileAt.js');
const readDirectory = require('../src/readDirectory.js');
const filterMdFiles = require('../src/verify-archive.js');
const validateArchive = require('../src/validateArchiveSelect.js');

const arrayLinksFormated = [
  {
    file: './SAP004-md-links/test/mock.md',
    href: 'https://thewalkingdead.com.br/',
    text: 'The Walking Dead'
  },
  {
    file: './SAP004-md-links/test/mock.md',
    href: 'https://www.youtube.com/watch?v=DHQzM5Ee4cw',
    text: '10ª temporada - Trailer'
  },
  {
    file: './SAP004-md-links/test/mock.md',
    href: 'https://www.youtube.com/watch?v=of-Bqmlgj98',
    text: '2ª temporada - abertura'
  },
];

const arrayLinksFormatedWithValidate = [
  {
    file: './SAP004-md-links/test/mock.md',
    href: 'https://thewalkingdead.com.br/',
    stats: 'OK 200',
    text: 'The Walking Dead'
  },
  {
    file: './SAP004-md-links/test/mock.md',
    href: 'https://www.youtube.com/watch?v=DHQzM5Ee4cw',
    stats: 'OK 200',
    text: '10ª temporada - Trailer'
  },
  {
    file: './SAP004-md-links/test/mock.md',
    href: 'https://www.youtube.com/watch?v=of-Bqmlgj98',
    stats: 'OK 200',
    text: '2ª temporada - abertura'
  },
]

it('deve retornar o nome do arquivo se for com extensão md', () => {
  expect(filterMdFiles('test/mock.md')).toEqual('test/mock.md');
});

//readDirectory
test('deve retornar uos links formatados ao ler um diretório com uma arquivo md', (done) => {
  readDirectory('./test').then((linksFormated) => {
    expect(linksFormated).toEqual(arrayLinksFormated);
    done()
  });
});

//validate HTTP
it('deve retornar uma mensagem caso não consiga validar o link', () => {
  validateHTTP(['test/mock.md']).catch((err) => {
    expect(err).toEqual("desculpe, não foi possível validar o link")
  })
});


it('deve retornar um array com os status', () => {
  validateArchive(['--validate', arrayLinksFormated]).then((result) => {
    expect(result).toEqual()
  })
});


//mdLinks
test('deve retornar uma função', (done) => {
  expect(typeof mdLinks).toBe('function');
  done()
});


test('deve retornar o texto, o link e o local do ARQUIVO', (done) => {
  mdLinks(['test/mock.js']).catch((err) => {
    expect(err).toEqual('não foi possível ler o arquivo/diretório');
    done()
  });
})

test('deve retornar um erro se não houver links', (done) => {
  mdLinks(['vazio.md']).catch((err) => {
    expect(err).toEqual('não foi possível ler o arquivo/diretório');
    done()
  });
})
