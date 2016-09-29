module.controller("mysongcontroller", function ($scope, mysongfactory) {

    var promise = mysongfactory.callserver($scope);
    promise.then(function (data) {
            console.log(data);
            $scope.result = data;
        }),

        function (error) {
            $scope.result = error;
        }
});

module.filter("trustUrl", ['$sce', function ($sce) {
    return function (recordingUrl) {
        return $sce.trustAsResourceUrl(recordingUrl);
    };
    }]);

