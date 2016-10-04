var express = require("express");

var app = express();
var bodyparser = require('body-parser');

app.use(bodyparser.urlencoded({
    extended: false
}));

app.use(bodyparser.json);


app.use(express.static('public'));

app.post('/register', function (request, response) {


    var dbOperations = require('./crudoperations');

    var data = request.body;
    console.log("Data is ", data);
    dbOperations.addUser(data, response);


});
