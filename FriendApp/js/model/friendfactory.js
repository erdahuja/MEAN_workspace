app.factory("friendfactory", function ($http, $q) {
//alert("in factory");

    var object = {
        //bad approach, scope tightly couples with view.
        callserver: function ($scope) {
            //var result = "";
            var result = $q.defer();
            alert("call server");
            $http.get('server/friends.json').then(function (data) {
                //result = data;
                //  $scope.result = data;//bad way
                result.resolve(data);
            }, function (error) {
                // result = error;
                //$scope.result = error;
                result.reject(error);
            });
            return result.promise;
        }
    };
    return object;
    //    object.callserver=function(){
    //        
    //    }

});
