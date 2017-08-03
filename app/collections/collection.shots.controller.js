;(function () {

    "use strict";

    angular
        .module("app")
        .controller("CollectionShotsController", CollectionShotsController);

    CollectionShotsController.$inject = ['CollectionModel', '$stateParams','$state'];

    function CollectionShotsController(CollectionModel, $stateParams, $state) {
        let vm = this;

        vm.model = {
            shots: CollectionModel.getCollectionShots.get({id: $stateParams.id})
        };

        activate();

        function activate() {
            let arr = vm.model.shots.shots;
            for(let i=0; i < vm.model.shots.shots.length; i++) {
                if (arr[i]['avatar_content_type'] == 'image/gif') {
                    arr[i]['preloadGif'] = (new Image().src = arr[i]['avatar']);
                }
            }
        }

        vm.menu = {
            showShot: showShot
        };

        function showShot(shotId) {
            $state.go('shot',{id: shotId});
        }
    }

})();