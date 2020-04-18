var http = require('http');

var manager = function(request, response) {
    console.log('Hola mundo!')
}

var server = http.createServer(manager)

server.listen(8080)