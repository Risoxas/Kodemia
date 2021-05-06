const fs = require('fs')

fs.promises.rmdir('newDir', {recursive:true})
    .then(() => console.log('Carpeta eliminada'))
    .catch((error) => console.error('Error: ', error))