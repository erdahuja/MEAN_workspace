var dboperations = {
        addUser: function () {
            //function addUser() {

            var User = require('./schema');

            User.create({}, function (error, response) {



                //            User.create({
                //                "name": "Deepak",
                //                "phone": [
                //        2222, 3333
                //    ],
                //                "address": [{
                //                        "state": "Delhi",
                //                        "pincode": 1122
                //        }, {
                //                        "state": "haryana",
                //                        "pincode": 2211
                //        },
                //]
                //            }, function (error, response) {

                if (error) {
response.send("Error ",error);
                   // console.log("error detected", error);
                } else {

                    console.log("data added .....");

                }


            });
        }

            findUser: function (username) {

            var User = require("./schema");

            User.find({
                "name": username
            }, function (error, response) {
                if (error) {
                    console.log("record not found...", error);

                } else {

                    console.log(response);
                }


            });


        }

    }
    //findUser("Deepak");
