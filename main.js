var http = require("http");

//------first node server code
/*
var server = http.createServer(function (req, res) {
  res.end("Hello World!");
});

server.listen(5050);
console.log("Server run succesfully");
*/

//------Request Respond Model

var server = http.createServer(function (req, res) {
    if (req.url == "/") {
        res.writeHead(200, {
            "Content-Type": "text-html",
        });
        res.write("<h1>This is home page </h1>");
        res.end();
    } else if (req.url == "/about") {
        res.writeHead(200, {
            "Content-Type": "text-html",
        });
        res.write("<h1>This is about page</h1>");
        res.end();
    } else if (req.url == "/contact") {
        res.writeHead(200, {
            "Content-Type": "text-html",
        });
        res.write("<h1>this is contact page </h1>");
        res.end();
    }
});

server.listen(5050);
console.log("Server run succesfully");
