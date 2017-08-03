var http = require('http');

http.createServer(function (req, res) {
  console.log(req)
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Connection hello established');
}).listen(8000);