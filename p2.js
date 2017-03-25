// Require the stuff we need
var express = require("express");
var http = require("http");

// Build the app
var app = express();

// Add some middleware
app.use(express.static(process.argv[3] || path.join(__dirname, 'public')))



// Start it up!
http.createServer(app).listen(process.argv[2]);




