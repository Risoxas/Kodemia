const fs = require('fs')

fs.writeFile('created.txt', 'Hola desde node fs', 'utf8', (error) => { 
    console.log('Se escribio el archivo')
})