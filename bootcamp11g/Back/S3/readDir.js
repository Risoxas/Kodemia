const fs = require('fs')

fs.promises.readdir('newDir')
    .then((files) => console.log(files))
    .catch((error) => console.error('Error ', error))