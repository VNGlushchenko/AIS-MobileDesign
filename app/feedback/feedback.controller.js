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
            FeedbackModel.sendFeedback.save({
            email: feedbackForm.email.value,/*vm.model.email*/
            name: feedbackForm.name.value/*vm.model.name*/,
            message: feedbackForm.message.value /*vm.model.message*/
        }).$promise.then(response => {
            if (response.status == 201) {
                console.log('Success');/*event.element.parent.html('<span>Your feedback has successfully been sent.</span>');*/
            } else {
                console.log('Error');/*event.element.parent.html('<span>Sorry. Something went wrong. Please, try again.</span>');*/
            }
        });
        }

    }

})();