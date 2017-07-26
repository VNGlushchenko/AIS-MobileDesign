;(function() {

    "use strict";

    angular
        .module("app")
        .controller("MainFeedbackController", MainFeedbackController);

    MainFeedbackController.$inject = ['ngDialog'];

    function MainFeedbackController(ngDialog) {

        let vm = this;

        vm.menu = {
            openFeedbackForm: openFeedbackForm
        };

        function openFeedbackForm() {
            ngDialog.open({
                template: 'app/feedback/feedback.template.html',
                className: 'ngdialog-theme-default',
                controller: 'FeedbackController',
                controllerAs: 'fc',
                width: '600px',
                preCloseCallback: function(value) {
                    if (confirm('Are you sure you want to close without saving your changes?')) {
                        return true;
                    }
                    return false;
                }
            });
        }

    }

})();