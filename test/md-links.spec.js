const mdLinks = require('../index.js');
const validateHTTP = require('../src/validateHTTPS.js');
const format = require('../src/format.js');
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
  it('should be a function', () => {
    expect(filterMdFiles('test/mock.md')).toBe(true);
  });
});


//readDirectory

describe('mdLinks', () => {
  test('should be a function', (done) => {
    readDirectory('./test').then((linksFormated) => {
      return expect(linksFormated).toEqual(arrayLinksFormated);
    });
    done()
  });
})



//readFile
describe('error', () => {
  test('should return an error if not found links', (done) => {
    (readFileAt('test/notFound.md')).catch((err) => {
      expect(err).toBe('Link não encontrado');
    });
    done()
  });
});



//format
const arrayTest = [
  '[The Walking Dead](https://thewalkingdead.com.br/)',
  '[10ª temporada - Trailer](https://www.youtube.com/watch?v=DHQzM5Ee4cw)',
  '[2ª temporada - abertura](https://www.youtube.com/watch?v=of-Bqmlgj98)'
]

describe('format', () => {
  it('should be a function', () => {
    expect(format(arrayTest, 'test/mock.md')).toEqual(arrayLinksFormated);
  });
});


//validateHTTP
describe('the links validateHTTPS', () => {
  it('should return the validation of the links + the message', () => {
    (validateHTTP(['test/mock.md'])).then((result) => {
      expect(result).toEqual(arrayLinksFormatedWithValidate)
    })
  });
})



//mdLinks

describe('mdLinks', () => {
  it('should be a function', () => {
    expect(typeof mdLinks).toBe('function');
  });
});

test('the links are okay', (done) => {
  (mdLinks(['test/mock.md'])).then((result) => {
    expect(result).toEqual(arrayLinksFormated);
  });
  done()
})

describe('the links validateHTTPS', () => {
  test('should return the validation of the links + the message', (done) => {
    (mdLinks(['test/', '--validate'])).then((result) => {
      expect(result).toEqual(arrayLinksFormatedWithValidate)
    })
    done()
  });
})

describe('the links validateHTTPS', () => {
  test('should return the validation of the links + the message', (done) => {
    (mdLinks(['test/mock.md', '--validate'])).then((result) => {
      expect(result).toEqual(arrayLinksFormatedWithValidate)
    })
    done()
  });
})

describe('error', () => {
  test('should return an error if not found links', (done) => {
    (mdLinks('test/vazio.md')).catch((err) => {
      expect(err).toBe('não existem links nesse arquivo!');
    });
    done()
  });
});

