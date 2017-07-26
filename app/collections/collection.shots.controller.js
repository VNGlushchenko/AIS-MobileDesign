;(function () {

    "use strict";

    angular
        .module("app")
        .controller("CollectionShotsController", CollectionShotsController);

    CollectionShotsController.$inject = ['CollectionModel', '$stateParams','$state'];

    function CollectionShotsController(CollectionModel, $stateParams, $state) {
        let vm = this;

        vm.model = {
            shots: CollectionModel.getCollectionShots.get({id: $stateParams.id}),
            showShot: showShot
        };

        function showShot(shotId) {
            $state.go('shot',{id: shotId});
        }
    }

})();