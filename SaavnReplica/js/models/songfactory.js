module.factory("mysongfactory", function ($http, $q) {
    var object = {

        callserver: function ($scope) {
            var result = $q.defer();
            $http.get("server/server.json").then(function (data) {
                result.resolve(data);

            }, function (error) {

                result.reject(error);
            });
            return result.promise;
        }

    };
    return object;

});
