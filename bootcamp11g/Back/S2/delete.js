const fs = require('fs');
const rmFile = 'new.txt';

fs.unlink(rmFile, (err)=>{
    if(err){console.error('Error: ',err);return;}
})