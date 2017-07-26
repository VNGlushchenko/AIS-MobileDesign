;(function () {

    "use strict";

    angular
        .module("app")
        .factory("FeedbackModel", FeedbackModel);

    FeedbackModel.$inject = ['$resource'];

    function FeedbackModel($resource) {
        
        let menu = {
            sendFeedback: $resource('http://dev-api.mobile.design/api/feedbacks?email=:email&name=:name&message=:message')
        };

        return menu;

    }

})();