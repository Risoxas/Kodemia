const fs = require('fs');

fs.writeFile('new.txt', 'Texto en archivo nuevo', 'utf8', err=>{
    if(err){
        console.error('No se pudo crear el archivo: ',err);
        return 0;
    }
}) 