// const mdLinks = require('../index.js');
// // const validateHTTP = require('../src/validateHTTPS.js');

// describe('mdLinks', () => {
//   it('should be a function', () => {
//     expect(typeof mdLinks).toBe('function');
//   });
// });

// describe('the links are okay', () => {
//   it('should be return a link, the title of link and the file', () => {
//     (mdLinks(['test/mock.md'])).then((result) => {
//       return expect(result).toEqual([
//         {
//           file: 'C:\\Users\\Marjorie\\Documents\\repositorios\\SAP004-md-links\\test\\mock.md',
//           href: 'https://thewalkingdead.com.br/',
//           text: 'The Walking Dead'
//         },
//         {
//           file: 'C:\\Users\\Marjorie\\Documents\\repositorios\\SAP004-md-links\\test\\mock.md',
//           href: 'http://www.adorocinema.com/series/serie-7330/temporada-16736/',
//           text: '1ª temporada'
//         },
//         {
//           file: 'C:\\Users\\Marjorie\\Documents\\repositorios\\SAP004-md-links\\test\\mock.md',
//           href: 'https://www.adorocinema.com/series/serie-7330/temporada-18736/',
//           text: '2ª temporada'
//         },
//       ]);
//     });
//   });
// })

// // describe('the links are okay', () => {
// //   it('should be return a link, the title of link and the file', () => {
// //     (mdLinks(['test/mock.md', '--validate'])).then((result) => {
// //       return expect(result).toEqual([
// //         {
// //           file: 'C:\\Users\\Marjorie\\Documents\\repositorios\\SAP004-md-links\\test\\mock.md',
// //           href: 'https://thewalkingdead.com.br/',
// //           stats: 'OK 200',
// //           text: 'The Walking Dead'
// //         },
// //         {
// //           file: 'C:\\Users\\Marjorie\\Documents\\repositorios\\SAP004-md-links\\test\\mock.md',
// //           href: 'http://www.adorocinema.com/series/serie-7330/temporada-16736/',
// //           stats: 'OK 200',
// //           text: '1ª temporada'
// //         },
// //         {
// //           file: 'C:\\Users\\Marjorie\\Documents\\repositorios\\SAP004-md-links\\test\\mock.md',
// //           href: 'https://www.adorocinema.com/series/serie-7330/temporada-18736/',
// //           stats: 'OK 200',
// //           text: '2ª temporada'
// //         },
// //       ])
// //     });
// //   });
// // })

// describe('the links validateHTTPS', () => {
//   it('should return the validation of the links + the message', () => {
//     (validateHTTP(['test/mock.md'])).then((result) => {
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
//     })
//   });
// })

// // describe('the links validateHTTPS', () => {
// //   it('should return the validation of the links + the message', () => {
// //     (mdLinks(['test/', '--validate'])).then((result) => {
// //       return expect(result).toEqual([
// //         {
// //           file: 'C:\\Users\\Marjorie\\Documents\\repositorios\\SAP004-md-links\\test\\mock.md',
// //           href: 'https://thewalkingdead.com.br/',
// //           stats: 'OK 200',
// //           text: 'The Walking Dead'
// //         },
// //         {
// //           file: 'C:\\Users\\Marjorie\\Documents\\repositorios\\SAP004-md-links\\test\\mock.md',
// //           href: 'http://www.adorocinema.com/series/serie-7330/temporada-16736/',
// //           stats: 'OK 200',
// //           text: '1ª temporada'
// //         },
// //         {
// //           file: 'C:\\Users\\Marjorie\\Documents\\repositorios\\SAP004-md-links\\test\\mock.md',
// //           href: 'https://www.adorocinema.com/series/serie-7330/temporada-18736/',
// //           stats: 'OK 200',
// //           text: '2ª temporada'
// //         },
// //       ])
// //     })
// //   });
// // })

// describe('error', () => {
//   it('should return an error if not found links', () => {
//     (mdLinks('test/vazio.md')).catch((err) => {
//       return expect(err).toBe('não existem links nesse arquivo!');
//     });
//   });
// });

