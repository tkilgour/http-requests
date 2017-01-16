var request = require('request');
var fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')
       .on('error', function (err) {
         throw err;
       })
       .on('response', function (response) {
         console.log(response.statusCode);
         console.log(response.statusMessage);
         console.log(response.headers['content-type']);
         console.log('Downloading image...');
       })
       .on('end', function () {
         console.log('Download complete.');
       })
       .pipe(fs.createWriteStream('./future.jpg'));
