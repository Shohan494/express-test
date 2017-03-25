// Require the stuff we need
var express = require("express");
var http = require("http");
var path = require("path");


// Build the app
var app = express();


app.get('/search', function(req, res)
{
var s = req.query
res.send(s)
})



app.listen(process.argv[2])
