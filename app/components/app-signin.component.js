;
(function() {

    "use strict";

    angular
        .module("app")
        .component("appSignin", {
            bindings: {
                email: '<',
                password: '<'
            },
            templateUrl: "app/components/app-signin.template.html",
            controller: ['UserModel', function(UserModel) {
                let vm = this;
                vm.model = {
                    email: '',
                    password: ''
                };

                vm.menu = {
                    authUser: UserModel
                }
            }]
        })
})();