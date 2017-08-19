;
(function() {

    "use strict";

    angular
        .module("app")
        .component("appSignup", {
            bindings: {
                email: '<',
                password: '<',
                password_confirmation: '<'
            },
            templateUrl: "app/components/app-signup.template.html",
            controller: ['UserModel', function(UserModel) {
                let vm = this;
                vm.model = {
                    email: '',
                    password: '',
                    password_confirmation: ''
                };

                vm.menu = {
                    authUser: UserModel
                };
            }]
        })
})();