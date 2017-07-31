;(function () {

    "use strict";

    angular
        .module("app")
        .factory("FeedbackModel", FeedbackModel);

    FeedbackModel.$inject = ['$resource'];

    function FeedbackModel($resource) {
        
        let feedbackSuccess = false;
        let menu = {
            sendFeedback: $resource('http://dev-api.mobile.design/api/feedbacks'),
            getFeedbackSuccess: getFeedbackSuccess,
            setFeedbackSuccess: setFeedbackSuccess
        };

        function getFeedbackSuccess(param) {
            return feedbackSuccess;
        }

        function setFeedbackSuccess(param) {
            feedbackSuccess = param;
        }

        return menu;

    }

})();