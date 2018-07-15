var http = require('http');

var server = http.createServer(function(req, res){

  //write code here
 res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World!');

});

server.listen(8000); 