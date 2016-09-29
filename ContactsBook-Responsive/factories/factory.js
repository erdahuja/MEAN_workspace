app.factory("ContactService", function ($http) {
    var factory = {};

    factory.addContact = function (objContact) {

        return $http.get('http://localhost/contacts.cfc/method=newContact&jsStruct=' + JSON.stringify(objContact));

    };

    return factory;
});
