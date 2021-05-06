const fs = require('fs')

fs.promises.copyFile('newFile.txt', 'newFileCopy.txt')
    .then(() => console.log('Archivo copiado'))
    .catch((error) => console.error('Error: ', error))