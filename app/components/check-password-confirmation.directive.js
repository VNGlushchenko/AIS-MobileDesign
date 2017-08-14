;
(function() {

    "use strict";

    angular
        .module("app")
        .directive("checkPasswordConfirmation", function() {
            return {
                restrict: 'A',
                scope: {
                    checking_password: '=checkingPassword'
                },
                require: 'ngModel',
                link: function(scope, elem, attrs, ctrl) {
                    ctrl.$validators.check_password_confirmation = function(modelValue, viewValue) {
                        return modelValue == scope.checking_password;
                    };
                    scope.$watch("checking_password", function() {
                        ctrl.$validate();
                    });
                }
            }
        })
})();