const fs = require('fs');

fs.copyFile('new.txt', 'newCopy.txt', err=>{
    if(err){console.error('Error: ',err);return;}
})