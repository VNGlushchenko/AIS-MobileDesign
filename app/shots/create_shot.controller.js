;(function () {

    "use strict";

    angular
        .module("app")
        .controller("CreateShotController", CreateShotController);

    CreateShotController.$inject = ['CreateShotModel'];

    function CreateShotController(CreateShotModel) {
        let vm = this;

        vm.model = {
            shot: {
                title: '',
                portfolio: false,
                inspiration: false,
                author: '',
                description: '',
                link: '',
                avatar: '',
                platform_ids: []
            },
            tags: []
        };

        vm.menu = {
            createShot: createShot,
            createPlatformIdsArray: createPlatformIdsArray,
            createTagsArray: createTagsArray
        };

        function createShot() {
            createPlatformIdsArray();
            createTagsArray();
            CreateShotModel.createShot.save(vm.model);
        }

        function createPlatformIdsArray() {
            vm.model.shot.platform_ids = shotForm.platform_ids.value.split(/(?:\s)+/g);
        }

        function createTagsArray() {
            vm.model.tags = shotForm.tags.value.split(/(?:\s)+/g);
        }

    }

})();