var http = require('http');
var fs = require('fs');

var file = fs.readFileSync('./serv.js');

http.createServer(function(request, response){
if (request.method == 'GET'){
response.writeHead(200, {'Content-Type' : 'text/plain'});
console.log('sent a Response' );
response.end(file);
}
else{
response.writeHead(200, {'Content-Type' : 'text/plain'});
response.end('Not a supported call');
}
}).listen(process.env.PORT, process.env.IP);
console.log('You may now hit the server'); 
