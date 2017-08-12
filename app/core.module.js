;
(function() {
    "use strict";

    angular.module("app", ['ui.router', 'ngResource', 'ngDialog', 'toastr'])
        /* .config(['toastrConfig', '$timeout', '$state', function(toastrConfig, $timeout, $state) {
            angular.extend(toastrConfig, {
                onHidden: function(isHiddenByClick, toast) {
                    $timeout(redirect, 2000);

                    function redirect() {
                        $state.go('signIn')
                    }
                }
            });
        }]) */
    ;

})();