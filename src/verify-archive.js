const path = require('path');

const filterMdFiles = (file) => {
  return path.extname(file) === '.md';
}

module.exports = filterMdFiles;
