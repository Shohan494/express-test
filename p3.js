// Require the stuff we need
var express = require("express");
var http = require("http");

///////////
//////////
var path = require('path');

// Build the app
var app = express();

// Add some middleware
app.set('views', process.argv[3] || path.join(__dirname, 'templates'))

app.set('view engine', 'pug')

app.get('/home', function (req, response) {
  response.render('index', {date: new Date().toDateString()});
})

// Start it up!
http.createServer(app).listen(process.argv[2]);


/* Official Solution

    var express = require('express')
    var app = express()

    app.set('view engine', 'pug')

    app.set('views', process.argv[3])

    app.get('/home', function(req, res) {
      res.render('index', {date: new Date().toDateString()})
    })
    app.listen(process.argv[2])

*/










