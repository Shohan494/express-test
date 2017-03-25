// Require the stuff we need
var express = require("express");
var http = require("http");

// Build the app
var app = express();

// Add some middleware
app.use(require('stylus').middleware(process.argv[3]));

app.use(express.static(process.argv[3]));


app.listen(process.argv[2])

