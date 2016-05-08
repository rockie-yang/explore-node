/**
 * Created by Rockie Yang on 08/05/16.
 */

var net = require('net');

var port = +process.argv[2];

var strftime = require('strftime')
var server = net.createServer(function(socket){
    var time = strftime('%Y-%m-%d %H:%M', new Date());
    socket.write(time + '\n');
    socket.end();
});

server.listen(port);
