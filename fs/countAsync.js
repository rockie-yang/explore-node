
var fs = require('fs');

var filename = process.argv[2];
fs.readFile(filename, function(error, content) {
    var lines = content.toString().split('\n');
    console.log(lines.length - 1);
});



