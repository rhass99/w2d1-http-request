// require `request` and the Node `fs` (filesystem) module
var request = require('request');
var fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')               // Note 1
       .on('error', function (err) {                                   // Note 2
         throw err; 
       })
       .on('response', function (response) {                           // Note 3
            console.log('Response Status Code: ', response.statusCode);
            console.log('Downloading Image....');
       })
       .on('end', () => {
            console.log('Download complete.');
       })
       .pipe(fs.createWriteStream('./future.jpg')); 