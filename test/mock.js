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

module.exports = {
  arrayLinksFormated, arrayLinksFormatedWithValidate
};
