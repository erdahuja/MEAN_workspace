app.factory("inboxFactory", function ($q, $http, $location) {
    var object = {};
    object.messages = {};

    object.deleteMessage = function (id, index) {

        this.messages.splice(index, 1);
    };
    object.goToMessage = function (id) {

        if (angular.isNumber(id)) {

            console.log("inbox/email/" + id);
            $location.path("inbox/email/" + id);
        }

    };



    object.getMessages = function () {
        var deferred = $q.defer();
        $http.get('json/emails.json')
            .success(function (data) {
                object.messages = data;
                deferred.resolve(data);
            })
            .error(function (data) {
                deferred.reject(data);
            });
        return deferred.promise;
    };

    return object;
});


app.factory("emailFactory", function ($q, $http, $routeParams) {


    var object = {};

    object.reply = function (message) {
        if (message) {

            alert("Reply content  : " + message);
        }


    };
    object.getMessages = function (params) {
        if (params.id) {
            var deferred = $q.defer();
            $http.get('json/message/' + params.id + '.json')
                .success(function (data) {
                    deferred.resolve(data);
                })
                .error(function (data) {
                    deferred.reject(data);
                });
            return deferred.promise;
        }
    };

    return object;

});
