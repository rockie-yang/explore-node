/**
 * Created by Rockie Yang on 06/05/16.
 */

var http = require('http');

var port = 8888;

// create a server
// write hello world
// listen on port 8888
http.createServer(function(request, resonse) {
    resonse.writeHead(200);
    resonse.write("hello world!");
    resonse.end();
}).listen(port);

console.log('listening on port ' + port);

// test with
//  curl http://localhost:8888
// or open a browser