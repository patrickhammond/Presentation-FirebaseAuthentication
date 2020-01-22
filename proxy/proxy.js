var http = require('http');
var httpProxy = require('http-proxy');

var apiProxy = httpProxy.createProxyServer({
    target: 'http://localhost:3000'
});

var clientProxy = httpProxy.createProxyServer({
    target: 'http://localhost:4200',
    ws: true
});

var server = http.createServer(function (req, res) {
    if (req.url.startsWith('/api/')) {
        req.url = req.url.replace('/api/', '');
        apiProxy.web(req, res);
    } else {
        console.log('client...');
        clientProxy.web(req, res);
    }
});

server.on('upgrade', function (req, socket, head) {
    clientProxy.ws(req, socket, head);
});

server.listen(8080);
