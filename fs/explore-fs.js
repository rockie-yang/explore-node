/**
 * Created by Rockie Yang on 06/05/16.
 */

// read file in synchronous manner
var fs = require('fs');
var content = fs.readFileSync('/etc/hosts');
console.log(content);


// read file in asynchronous manner
fs.readFile('/etc/hosts', function(err, content) {
    console.log(content)
})