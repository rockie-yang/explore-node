/**
 * Created by Rockie Yang on 08/05/16.
 */

var http = require('http');
var map = require('through2-map');
var url = require('url');

var port = +process.argv[2];

var server = http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'application/json'});

    var meta = url.parse(req.url, true);

    if (meta.pathname == '/api/parsetime') {
        var iso = new Date(meta.query.iso);
        var time = {
            'hour': iso.getHours(),
            'minute': iso.getMinutes(),
            'second': iso.getSeconds()
        };
        res.write(JSON.stringify(time));

    } else if (meta.pathname == '/api/unixtime') {
        var iso = new Date(meta.query.iso);
        var time = {
            'unixtime': iso.getTime()
        };
        res.write(JSON.stringify(time));
    }
    else {
        res.write("{'resp': 'error'}");
    }
    res.end();
});

server.listen(port);

