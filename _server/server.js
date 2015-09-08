var finalhandler = require('finalhandler');
var http = require('http');
var serveStatic = require('serve-static');

// set default port
var port = 3000;

// serve up current dir
var serve = serveStatic('./');

// initialize server
var server = http.createServer(function (req, res) {
    var done = finalhandler(req, res);
    serve(req, res, done);
});
server.listen(port);
