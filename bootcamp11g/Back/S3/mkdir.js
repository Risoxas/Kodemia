const fs = require('fs')

fs.promises.mkdir('newDir')
    .then(() => console.log('Carpeta creada'))
    .catch((error) => console.error('Error: ', error))