const fs = require('fs')

fs.promises.readFile('newFile.txt', {encoding:'utf8'})
    .then((data) => console.log('El archivo contiene: ', data))
    .catch((error) => console.error('Archivo no se puede leer por: ', error))