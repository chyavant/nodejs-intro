var http = require('http');

var server = http.createServer(function (request, response){
response.writeHead(200, {"Content-Type" : "text/plain"});
response.end("Hello world\n");
});

server.listen(process.env.PORT, process.env.IP);

console.log("Server running at http://"+process.env.PORT+":"+process.env.IP);