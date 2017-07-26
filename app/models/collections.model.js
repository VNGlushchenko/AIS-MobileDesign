;(function () {

    "use strict";

    angular
        .module("app")
        .factory("CollectionModel", CollectionModel);

    CollectionModel.$inject = ['$resource'];

    function CollectionModel($resource) {
        
        let collections = {
            getAll: $resource('http://dev-api.mobile.design/api/collections'),
            getCollectionShots: $resource('http://dev-api.mobile.design/api/collections/:id/shots')
        };

        return collections;

    }

})();