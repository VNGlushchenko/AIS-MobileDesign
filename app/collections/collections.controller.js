;(function () {

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
            CollectionModel.getAll().then(
                response => {
                    vm.model.collections = response.data.collections;
                    vm.model.collections[0].avatar = '/app/images/iOS.png';
                    vm.model.collections[1].avatar = '/app/images/Android.jpg';
                }
            )
        }
    }

})();