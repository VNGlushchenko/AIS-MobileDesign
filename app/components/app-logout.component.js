;
(function() {

    "use strict";

    angular
        .module("app")
        .component("appLogout", {
            require: {
                parent: '^appHeader'
            },
            templateUrl: '',
            controller: function() {
                this.$onInit = function() {
                    parent.user.logOut();
                };
            }
        })
})();