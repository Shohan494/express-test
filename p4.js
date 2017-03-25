// Require the stuff we need
var express = require("express");
var http = require("http");

// Build the app
var app = express();

// Add some middleware
app.use(function(request, response) {
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.end("Express.js rocks!");
});

// Start it up!
http.createServer(app).listen(process.argv[2]);


