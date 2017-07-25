;(function () {

    "use strict";

    angular
        .module("app")
        .factory("CollectionModel", CollectionModel);

    CollectionModel.$inject = ['$http'];

    function CollectionModel($http) {
        
        let collections = {
            getAll: getAll,
            getCollectionShots: getCollectionShots
        };

        function getAll() {
            return $http.get('http://dev-api.mobile.design/api/collections')
        }

        function getCollectionShots(id) {
            return $http.get(`http://dev-api.mobile.design/api/collections/${id}/shots`)
        }

        return collections;

    }

})();