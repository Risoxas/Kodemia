const fs = require('fs');

fs.readFile('new.txt', 'utf8', (err, data) => {
    if(err) {
        console.error('Error: ',err);
        return 0;
    }
    console.log(data)
})