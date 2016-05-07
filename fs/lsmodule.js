/**
 * Created by Rockie Yang on 07/05/16.
 */

module.exports = function(dir, ext, callback) {
    var fs = require('fs');
    fs.readdir(dir, function(error, list) {
        if (error) {
            return callback(error, null);
        }

        var matched = list.filter(function(filename) {
            return filename.endsWith('.' + ext);
        })
        callback(null, matched);

    });
}
