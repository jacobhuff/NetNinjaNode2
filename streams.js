const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog1.txt', { encoding: 'utf8' });
const writeStream = fs.createWriteStream('./docs/blog4.txt');

// piping
readStream.pipe(writeStream);