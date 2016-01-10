var express = require("express"),
    path = require("path"),
    app = express(),
    livereload = require('express-livereload');

var server = require('http').createServer(app);

app.set('views', './public');
app.set('view engine', 'jade');

app.use(express.static (__dirname+'/public'));


app.get("/", function(req, res){
  res.render('index');
});

app.post("/", function(req, res){
  res.render('index');
});

livereload(app, config={});
config.watchDir = __dirname + "/public";

server.listen(process.env.PORT || 8080);

