/**
 * Directive: Inbox <inbox></inbox>
 */
app.directive('inbox', function InboxDrctv() {
    'use strict';

    return {
        restrict: 'EA',
        replace: true,
        scope: true,
        templateUrl: "directives/inbox.tmpl.html",
        controllerAs: 'inbox',

        controller: function (inboxFactory) {
            this.messages = [];

            this.goToMessage = function (id) {
                inboxFactory.goToMessage(id);
            };


            this.deleteMessage = function (id, index) {
                inboxFactory.deleteMessage(id, index);
            };
            inboxFactory.getMessages()
                .then(angular.bind(this, function then() {
                    this.messages = inboxFactory.messages;
                }));
        },

        link: function (scope, element, attrs, ctrl) {
            /* 
              by convention we do not $ prefix arguments to the link function
              this is to be explicit that they have a fixed order
            */
        }
    }
});