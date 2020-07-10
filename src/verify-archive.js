const path = require('path');

const filterMdFiles = (file) => {
  if (path.extname(file) === '.md') {
    return file;
  } else {
    err = 'não é um arquivo md';
    return err;
  }
}

module.exports = filterMdFiles;
