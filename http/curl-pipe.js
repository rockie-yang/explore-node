/**
 * Created by Rockie Yang on 07/05/16.
 */

var http = require('http');
var bl = require('bl');
var url = process.argv[2];

http.get(url, function(response){
    response.setEncoding('utf-8').pipe(bl(function(err, data){
        console.log(data.length);
        console.log(data.toString());
    }))
}).on('error', console.error);
