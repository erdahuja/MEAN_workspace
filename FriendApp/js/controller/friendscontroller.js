app.controller("friendscontroller", function ($scope, myfriendfactory) {
    alert("friend controller");
    var promise = friendfactory.callserver($scope);
    promise.then(function (data) {
        alert("loading result");
        $scope.result = data;
    }, function (error) {
        $scope.result = error;
    })
});
