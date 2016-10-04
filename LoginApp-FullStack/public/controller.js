app.controller("logincontroller", function ($scope, loginfactory) {

    $scope.checkLogin = function () {
        var loginobject = {

            "userid": $scope.userid,
            "password": $scope.password

        };
        
        

        var promise = loginfactory.loginCheck(loginobject);
        
           $scope.result = loginobject.userid + " " + loginobject.password;

        promise.then(function (data) {
            console.log("SUCCESS ", data.data.msg);
            $scope.result = data.data.msg;

        }, function (error) {
            $scope.result = error;

        });

    };


});
