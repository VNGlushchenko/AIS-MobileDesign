;(function () {

    "use strict";

    angular
        .module("app")
        .factory("PlatformsModel", PlatformsModel);

    PlatformsModel.$inject = ['$resource'];

    function PlatformsModel($resource) {
        
        let platforms = {
            getPlatforms: $resource('http://dev-api.mobile.design/api/platforms')
        };

        return platforms;

    }

})();