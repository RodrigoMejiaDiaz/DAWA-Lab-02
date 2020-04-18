var http = require('http')

var manager = (request, response) => {
    console.log('Conexion entrante')
    response.end('Hola mundo!')
}

var server = http.createServer(manager)
server.listen(8080)