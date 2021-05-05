const fs = require('fs');

fs.appendFile('new.txt', '\n', (err)=>{
    if(err) { console.error('Error: ',err);return;}
})