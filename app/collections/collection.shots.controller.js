;(function () {

    "use strict";

    angular
        .module("app")
        .controller("CollectionShotsController", CollectionShotsController);

    CollectionShotsController.$inject = ['CollectionModel', '$stateParams','$state'];

    function CollectionShotsController(CollectionModel, $stateParams, $state) {
        let vm = this;

        vm.model = {
            shots: {},
            showShot: showShot
        };

        activate();

        function activate() {
            CollectionModel.getCollectionShots($stateParams.id).then(
                response => vm.model.shots = response.data
            )
        }
        function showShot(shotId) {
            $state.go('shot',{id: shotId});
        }
    }

})();