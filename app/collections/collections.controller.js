;
(function() {

    "use strict";

    angular
        .module("app")
        .controller("CollectionsController", CollectionsController);

    CollectionsController.$inject = ['CollectionModel'];

    function CollectionsController(CollectionModel) {
        let vm = this;

        vm.model = {
            collections: []
        };

        activate();

        function activate() {
            CollectionModel.getAll.get().$promise.then(
                response => {
                    let collectionsResponse = response;
                    collectionsResponse.collections[0].avatar = '/app/images/ios.png';
                    collectionsResponse.collections[1].avatar = '/app/images/android.jpg';
                    vm.model.collections = collectionsResponse.collections;
                });

        }
    }
})();