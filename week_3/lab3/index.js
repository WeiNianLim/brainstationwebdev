const fs = require('fs')

fs.readFile('./txt/readme.txt', 'utf8', (err, data) => {
    console.log(data);
})

