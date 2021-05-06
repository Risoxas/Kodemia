const fs = require('fs')

fs.promises.appendFile('newFile.txt','\n Nuevo contenido agregado')
.then(()=> console.log('se agrego nuevo contenido'))
.catch((error)=> console.error('Error: ', error))