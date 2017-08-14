;
(function() {

    "use strict";

    angular
        .module("app")
        .component("appLogout", {
            require: {
                parent: '^appHeader'
            },
            templateUrl: "app/components/app-logout.template.html",
            controller: function() {
                this.$onInit = function() {
                    this.parent.user.logOut();
                };
            }
        })
})();