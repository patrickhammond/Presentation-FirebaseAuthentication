var proxy = require('express-http-proxy');
var app = require('express')();
var debug = require('debug')('proxy:proxy');
var http = require('http');

app.use('/api', proxy('http://localhost:3000'));
app.use('/', proxy('http://localhost:4200'));

var server = http.createServer(app);
server.listen(8080);
server.on('listening', onListening);

function onListening() {
    var addr = server.address();
    var bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    debug('Listening on ' + bind);
}
