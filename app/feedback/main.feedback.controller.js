;(function() {

    "use strict";

    angular
        .module("app")
        .controller("MainFeedbackController", MainFeedbackController);

    MainFeedbackController.$inject = ['ngDialog', 'FeedbackModel'];

    function MainFeedbackController(ngDialog, FeedbackModel) {

        let vm = this;

        vm.menu = {
            openFeedbackForm: openFeedbackForm,
            checkFeedbackSuccess: FeedbackModel
        };

        function openFeedbackForm() {
            ngDialog.open({
                template: 'app/feedback/feedback.template.html',
                className: 'ngdialog-theme-default',
                width: '600px',
                controller: 'FeedbackController',
                controllerAs: 'fc',
                preCloseCallback: function() {
                    if (vm.menu.checkFeedbackSuccess.getFeedbackSuccess()) {
                    	return true;
                    } else {
                    	if (confirm('Are you sure you want to close without saving your changes?')) {
                        return true;
                    	}
                    	return false;
                    }
                }
            });
        }

    }

})();