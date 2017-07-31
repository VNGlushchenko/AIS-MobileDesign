;(function() {

    "use strict";

    angular
        .module("app")
        .controller("FeedbackController", FeedbackController);

    FeedbackController.$inject = ['FeedbackModel','$timeout','ngDialog'];

    function FeedbackController(FeedbackModel, $timeout, ngDialog) {

        let vm = this;

        vm.model = {
            email: '',
            name: '',
            message: '',
            success: false,
            error: false
        };

        vm.menu = {

            submit: submit

        };

        function submit() {
            FeedbackModel.sendFeedback.save({
                email: vm.model.email,
                name: vm.model.name,
                message: vm.model.message
            }).$promise.then(
            
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