/**
 * Created by Rockie Yang on 07/05/16.
 */

var dir = process.argv[2];
var suffix = '.' + process.argv[3];


var fs = require('fs');
fs.readdir(dir, function(error, list) {
    /*
    loop one way
    // i is the index
    for (i in list) {
        if (list[i].endsWith(suffix)) {
            console.log(list[i]);
        }
    }
    */

    // loop using forEach
    list.forEach(function(file) {
        if (file.endsWith(suffix)) {
            console.log(file)
        }
    })
})