;(function () {

    "use strict";

    angular
        .module("app")
        .factory("CreateShotModel", CreateShotModel);

    CreateShotModel.$inject = ['$resource'];

    function CreateShotModel($resource) {
        
        let shotCreation = {
            createShot: $resource('http://dev-api.mobile.design/api/shots')
        };

        return shotCreation;

    }

})();