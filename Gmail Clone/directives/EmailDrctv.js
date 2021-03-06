/**
 * Directive: Email <email></email>
 */
app.directive('email', function EmailDrctv($timeout) {
    'use strict';

    return {
        restrict: 'E',
        replace: true,
        scope: true,
        templateUrl: "directives/email.tmpl.html",
        controllerAs: 'email',
        controller: function ($routeParams, $scope, emailFactory) {
            this.message = {};
            this.reply = function (message) {
                emailFactory.reply(message);
            };
            var getmessage = emailFactory.getMessages($routeParams);
            if (getmessage) {
                getmessage.then(angular.bind(this, function (response) {
                    emailFactory.message = response;
                    this.message = emailFactory.message;
                    $scope.$parent.email.title = this.message.subject;
                }));
            }
        },
        link: function (scope, element, attrs, ctrl) {
            var textarea = element.find('.email__response-text')[0];
            scope.$watch('reply', function (newVal, oldVal) {
                if (newVal === oldVal) return;
                if (newVal) {
                    $timeout(function () {
                        textarea.focus();
                    }, 0);
                }
            });
        }
    };
});
