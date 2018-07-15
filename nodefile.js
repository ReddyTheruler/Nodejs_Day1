

var fs = require('fs');

fs.readFile('Text.txt',   'utf8' , function (err, data) {
                    if (err) throw err;

    console.log(data);
});