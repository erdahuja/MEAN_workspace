var app = angular.module("mycontactsapp", ['ngRoute']);
app.config(function ($routeProvider) {

    $routeProvider.when('/all-contacts', {
        controller: "ctrlContacts",
        templateUrl: 'allcontacts.html'

    }).when('/view-contacts/:contactId', {
        controller: "ctrlViewContacts",
        templateUrl: 'viewcontacts.html'

    }).when('/add-contacts', {
        controller: "ctrlAddContacts",
        templateUrl: 'addcontacts.html'

    }).when('/edit-contacts', {
        controller: "ctrlEditContacts",
        templateUrl: 'addcontacts.html'

    }).otherwise({

        redirectTo: '/all-contacts'
    });

});
