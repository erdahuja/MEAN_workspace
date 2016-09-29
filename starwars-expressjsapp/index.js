var express = require('express');

var app = express();

app.get('/', function (req, res) {
    res.send("this is a response on homepage");


});

app.get('/star_wars_episode/:episodenumber?', function (req, res) {

    var episodenumber = req.params.episodenumber;
    res.send("epi number is " + episodenumber);

});

app.get('*', function (req, res) {

    res.send('page not found');

});

app.listen(3000, function () {

    console.log("express started at lh:3000");

});
