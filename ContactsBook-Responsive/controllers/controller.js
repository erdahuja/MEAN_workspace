app.controller("ctrlContacts", function ($scope) {


});
app.controller("ctrlViewContacts", function ($scope) {


});
app.controller("ctrlAddContacts", function ($scope, ContactService) {
    $scope.submitForm = function (contact) {
        if ($scope.ContactForm.$valid) {
            ContactService.addContact(contact).success(function () {
                $scope.ContactForm.$setPristine();
                alert("contact added");

            })
        }

    }

});
app.controller("ctrlEditContacts", function ($scope) {


});

app.controller("NavbarController", function ($scope, $location) {
    $scope.getClass = function (path) {
        if ($location.path().substr(0, path.length) == path) {
            return true;
        } else
            return false;

    }

});
