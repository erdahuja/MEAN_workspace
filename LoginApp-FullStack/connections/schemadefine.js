var mongoose = require("./connection");

var Schema = mongoose.Schema;

var userSchema = new Schema({

    userid: String,
    password: String
});
var User = mongoose.model("logindatas", userSchema);

module.exports = User;
