/**
 * Created by Rockie Yang on 07/05/16.
 */

var ls = require('./lsmodule');

var dir = process.argv[2];
var ext = process.argv[3];

ls(dir, ext, function(err, data) {
    data.forEach(function(filename) {
        console.log(filename);
    })
})
