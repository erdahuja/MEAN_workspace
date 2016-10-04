var loginoperation = {

    checkLogin: function (data, response) {
        console.log("user id is " + data.userid + " pwd is " + data.password);
        var User = require("./schemadefine.js");

        User.find({
            "userid": data.userid,
            "password": data.password
        }, function (error, docs) {
            if (error) {
                console.log("Can't Login Error Occured ", error);
                response.send({
                    "msg": "Can't Login Error Occured "
                });
            } else {

                if (docs.length > 0) {
                    console.log("Login SuccessFully...");
                    response.send({
                        msg: "Login SuccessFully..."
                    });
                } else {

                    console.log("Login failed...");
                    response.send({
                        msg: "Login failed..."
                    });

                }



            }
        });


    }

};


module.exports = loginoperation;
