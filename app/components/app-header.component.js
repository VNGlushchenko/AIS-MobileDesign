;
(function() {

    "use strict";

    angular
        .module("app")
        .component("appHeader", {
            transclude: true,
            templateUrl: "app/components/app-header.template.html",
            controller: ['UserModel', function(UserModel) {
                let vm = this;
                vm.user = UserModel;
            }]
        })

})();