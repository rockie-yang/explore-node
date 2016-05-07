/**
 * Created by Rockie Yang on 07/05/16.
 */

var http = require('http');

var url = process.argv[2];

http.get(url, function(response){
    response.setEncoding('utf-8');
    //response.on('data', function(data) {
    //    console.log(data);
    //})

    // since console.log is a function which accept one parameter
    // so the is identical to
    // function(data) {console.log(data);}
    response.on('data', console.log);
    response.on('error', console.error);
}).on('error', console.error)
