//step 1 require mongoose

var mongoose = require('mongoose');

var dbconfig = require("./dbconfig");
//step2 connect to db

mongoose.connect(dbconfig.dburl);
module.exports = mongoose;
