// Require the stuff we need
var express = require("express");
var http = require("http");
var path = require('path');
var fs = require('fs');

// Build the app
var app = express();

// Add some middleware
app.get('/books', function(req, res) {
  var filename = process.argv[3]
  fs.readFile(filename, function(e, data) {

    if (e) return res.sendStatus(500)
    try {
      books = JSON.parse(data)
    } catch (e) {
      res.sendStatus(500)
    }
    res.json(books)
  })
})


// Start it up!
http.createServer(app).listen(process.argv[2]);


