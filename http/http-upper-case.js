/**
 * Created by Rockie Yang on 08/05/16.
 */

var http = require('http');
var map = require('through2-map');

var port = process.argv[2];
var file = process.argv[3];

var server = http.createServer(function(req, res){
    res.writeHead(200, {'content-type': 'text/plain'});
    req.pipe(map(function(chunk){
        return chunk.toString().toUpperCase();
    })).pipe(res);
});

server.listen(port);

