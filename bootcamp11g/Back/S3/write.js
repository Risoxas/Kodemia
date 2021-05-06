const fs = require('fs')

fs.promises.writeFile('newFile.txt', 'Hola Mundo!', {encoding:'utf8', flag:'a'})
    .then(() => console.log('Archivo creado'))
    .catch((error) => console.error('Error :', error))