;
(function() {
    "use strict";

    angular.module("app", ['ui.router', 'ngResource', 'ngDialog', 'ngMessages', 'toastr'])
        .run(['toastrConfig', '$rootScope', function(toastrConfig, $rootScope) {
            angular.extend(toastrConfig, {
                closeButton: true,
                onHidden: function(isHiddenByClick, toast) {
                    if (toast.scope.message == "For authorized users only") {
                        $rootScope.$emit('authToastrClosed');
                    }
                }
            });
        }]);

})();