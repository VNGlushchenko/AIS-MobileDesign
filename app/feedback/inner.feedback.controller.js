;(function() {

    "use strict";

    angular
        .module("app")
        .controller("InnerFeedbackController", InnerFeedbackController);

    InnerFeedbackController.$inject = ['FeedbackModel','$timeout','ngDialog'];

    function InnerFeedbackController(FeedbackModel, $timeout, ngDialog) {

        let vm = this;

        vm.model = {
            feedback: {
                email: '',
                name: '',
                message: ''
            },
            success: false,
            error: false
        };

        vm.menu = {

            submit: submit

        };

        function submit() {
            FeedbackModel.sendFeedback.save(vm.model.feedback).$promise.then(
            
                response => {
                    FeedbackModel.setFeedbackSuccess(true);
                    vm.model.success = true;
                    vm.model.error = false;
                    $timeout(ngDialog.close, 5000);
                },

                response => {
                    vm.model.error = true;
                }

            );
        }

    }

})();