const fs = require('fs')

fs.promises.unlink('newFileCopy.txt')
    .then(() => console.log('Archivo eliminado'))
    .catch((error) => console.error('Error : ', error))