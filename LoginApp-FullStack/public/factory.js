app.factory("loginfactory", function ($http, $q) {
    var object = {

        loginCheck: function (loginObject) {
            var defer = $q.defer();



            $http.post("http://localhost:1234/login", loginObject).then(function (data) {

                defer.resolve(data);

            }, function (error) {

                defer.reject(error);
            });
            return defer.promise;

        }
    };

    return object;


});
