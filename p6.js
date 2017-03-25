// Require the stuff we need
var express = require("express");
var http = require("http");
var path = require("path");

// Build the app
var app = express();

var express = require('express')
var app = express()

app.put('/message/:id', function(req, res) {
  var id = req.params.id
  var str = require('crypto')
    .createHash('sha1')
    .update(new Date().toDateString() + id)
    .digest('hex')
  res.send(str)
})

app.listen(process.argv[2])
