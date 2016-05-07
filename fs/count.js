
var fs = require('fs');

var filename = process.argv[2];
var lines = fs.readFileSync(filename).toString().split('\n');


console.log(lines.length - 1);
