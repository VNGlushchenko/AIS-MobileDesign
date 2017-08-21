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
            controller: ['UserModel', '$scope', function(UserModel, $scope) {
                let vm = this;
                vm.model = {
                    email: '',
                    password: '',
                    password_confirmation: ''
                };

                vm.menu = {
                    authUser: UserModel,
                    submit: submit
                };
                
                $scope.setValidity = function(field, error_key, error_bool) {
                    $scope.signUpForm[field].$setValidity(error_key,  error_bool);
                };

                function submit(model) {
                    vm.menu.authUser.menu.signUp(model).then(
                        null,
                        () => {
                            if (vm.menu.authUser.errorsMessages.signUp.email) {
                                $scope.setValidity('email','email_error', false);
                            }
                            if (vm.menu.authUser.errorsMessages.signUp.password) {
                                $scope.setValidity('password','password_error', false);
                            }

                            if (vm.menu.authUser.errorsMessages.signUp.password_confirmation) {
                                $scope.setValidity('password_confirmation','password_confirmation_error', false);
                            }
                        }
                    )
                }
            }]
        })
})();