;(function() {

    "use strict";

    angular
        .module("app")
        .controller("FeedbackController", FeedbackController);

    FeedbackController.$inject = ['FeedbackModel'];

    function FeedbackController(FeedbackModel) {

        let vm = this;

        vm.model = {
            email: '',
            name: '',
            message: ''
        };

        vm.menu = {

            submit: submit
        };

        function submit(event) {
            //event.preventDefault();
            FeedbackModel.sendFeedback.post({
            email: vm.model.email,
            name: vm.model.name,
            message: vm.model.message
        }).$promise.then(response => {
            if (response.code == 201) {
                console.log('Success');/*event.element.parent.html('<span>Your feedback has successfully been sent.</span>');*/
            } else {
                console.log('Error');/*event.element.parent.html('<span>Sorry. Something went wrong. Please, try again.</span>');*/
            }
        });
        }

    }

})();