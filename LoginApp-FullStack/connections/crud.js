var express = require("express");

var app = express();

var bodyparser = require("body-parser");

//app.use(express.static("public"));app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.post('/login', function (request, response) {
    var loginoperation = require("./loginoperation");
    var data = request.body;
    console.log("DATA is      ", data);
    loginoperation.checkLogin(data, response);
});


app.listen(1234, function () {
    console.log("Server Start...");
});
