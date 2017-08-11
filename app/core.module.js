;
(function() {
    "use strict";

    angular.module("app", ['ui.router', 'ngResource', 'ngDialog', 'toastr'])
        /*         .config(function(toastrConfig) {
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
                        onHidden: ['$timeout', '$state', function($timeout, $state) {
                            return function(true, toast) {
                                $timeout($state.go('signIn'), 2000);
                            }
                        }],
                        onShown: null,
                        onTap: null,
                        progressBar: false,
                        tapToDismiss: true,
                        timeOut: 5000,
                        titleClass: 'toast-title',
                        toastClass: 'toast'
                    });
                }); */

})();