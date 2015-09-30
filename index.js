var express = require("express"); //express app
var app = express(); //namespacing express object output
var bodyParser = require("body-parser"); //for form submissions
var path = require("path"); // if I remember correctly, only allows calling of files within project dir

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/public", express.static(path.join(__dirname + "/public")));
app.set("view engine", "hbs");

app.listen(3000, function(){
  console.log("app listening on port 3000")
})

var statesController = require("./controllers/states");

app.use("/", statesController);

app.get("/", function(req, res){
  res.render("index", {})
});
