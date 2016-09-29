var mongoose = require('./connection');

//step 3 represent schema
var Schema = mongoose.Schema;
//step 4 creating schema for collections.

var userSchema = new Schema({
    name: String,
    phone: [],
    address: [{
        state: String,
        pincode: Number
    }]
});


var User = mongoose.model("users", userSchema); //users is collection name

module.exports = User;
