var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io').listen(http);

app.get('/', function(request, response){
response.sendfile('index.html');
});

io.on('connection', function(socket){
console.log('a user connected');
})

http.listen(process.env.PORT, function(){
console.log('listening to ', process.env.PORT);
});
