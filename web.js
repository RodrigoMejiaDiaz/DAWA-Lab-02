var http = require("http");
var fs = require("fs");

var html = fs.readFileSync("./index.html");

http 
    .createServer(function(request, response) {
        fs.readFile("./index.html", function(error, html){
            response.write(html);
            response.end();
        });        
    })
    .listen(8080);