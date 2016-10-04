//DI
module.controller("greetcontroller", function ($scope, greetfactory) {
    $scope.greet = function () {
        var fname = $scope.firstName;
        var lname = $scope.lastName;
        var string1 = greetfactory.initCap(fname);
        var string2 = greetfactory.initCap(lname);
        $scope.result = "welcome " + string1 + " " + string2;

    };

    $scope.clear = function () {
        $scope.firstName = "";
        $scope.lastName = "";
        $scope.result = "";
    };
});
