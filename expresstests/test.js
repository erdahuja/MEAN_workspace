var express = require("express");
var app = express();

app.get('/', function (req, res) {
    res.send("hello express get");


});

app.get('/hello', function (req, res) {
    res.send("hello express get from hello url");


});

app.listen(1234, function () {
    console.log("example app lisening on port 1234");

});
