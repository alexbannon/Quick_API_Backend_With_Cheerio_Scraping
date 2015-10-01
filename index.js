var path = require("path");
var http = require('http');
var https = require('https');
var fs = require('fs');
var privateKey = fs.readFileSync('test/keys/key.pem', 'utf8');
var certificate = fs.readFileSync('test/keys/key-cert.pem', 'utf8');
var credentials = {key: privateKey, cert: certificate};
var express = require("express");
var app = express();

app.use("/public", express.static(path.join(__dirname + "/public")));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));
app.set("view engine", "hbs");

var statesController = require("./controllers/states");
app.use("/", statesController);

app.get("/", function(req, res){
  res.render("index", {})
});


var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

httpServer.listen(8080);
httpsServer.listen(3000);
