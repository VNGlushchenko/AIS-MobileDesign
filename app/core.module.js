;
(function() {
    "use strict";

    angular.module("app", ['ui.router', 'ngResource', 'ngDialog', 'toastr'])
        .config(['toastrConfig', '$timeout', '$state', function(toastrConfig, $timeout, $state) {
            angular.extend(toastrConfig, {
                allowHtml: false,
                closeButton: true,
                closeHtml: '<button>&times;</button>',
                extendedTimeOut: 1000,
                iconClasses: {
                    error: 'toast-error',
                    info: 'toast-info',
                    success: 'toast-success',
                    warning: 'toast-warning'
                },
                messageClass: 'toast-message',
                onHidden: function(isHiddenByClick, toast) {
                    $timeout(redirect, 2000);

                    function redirect() {
                        $state.go('signIn')
                    }
                },
                onShown: null,
                onTap: null,
                progressBar: false,
                tapToDismiss: true,
                timeOut: 5000,
                titleClass: 'toast-title',
                toastClass: 'toast'
            });
        }]);

})();