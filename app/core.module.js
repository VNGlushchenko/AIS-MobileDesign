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
        }])
        .config(['$resourceProvider', '$httpProvider', function($resourceProvider, $httpProvider) {
            $resourceProvider.defaults.actions.saveWithHeaders = {
                method: 'POST',
                transformResponse: function(data, headers) {
                    return {
                        data: JSON.parse(data)['data'],
                        headers: headers()
                    }
                }
            };

            $httpProvider.interceptors.push('userCredential');
        }])
        .factory('userCredential', ['UserModel', function(UserModel) {
            return {
                request: function(config) {
                    let userAuthData = UserModel.getUserAuthData();
                    config.headers = userAuthData;
                    //console.log('config headers: ', config.headers);
                    return config;
                }
            }
        }]);
})();