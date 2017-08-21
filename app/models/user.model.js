;
(function() {

    "use strict";

    angular
        .module("app")
        .factory("UserModel", UserModel);

    UserModel.$inject = ['$resource', '$state', 'toastr', '$q', '$timeout', '$rootScope'];

    function UserModel($resource, $state, toastr, $q, $timeout, $rootScope) {
        let vm = this;

        vm.model = {
            user: {
                accesstoken: '',
                client: '',
                expiry: '',
                uid: '',
                tokentype: ''
            },
            isUserAuthKeysEmpty: true
        };

        vm.menu = {
            signUp: signUp,
            signIn: signIn,
            logOut: logOut,
            checkUserAuthData: checkUserAuthData,
            setUserAuthData: setUserAuthData
        };

        vm.errorsMessages = {
            signUp: {},
            signIn: {},
            feedback: {},
            createShot: {}
        };

        return {
            menu: vm.menu,
            model: vm.model,
            errorsMessages: vm.errorsMessages
        }

        function signUp(enteringData) {
            return $resource('http://dev-api.mobile.design/api/auth').saveWithHeaders(enteringData).$promise.then(
                response => redirectAfterAuth(response),
                response => {
                    let errors = response.data.errors;
                    //email
                    if (errors.email.length > 1) {
                        vm.errorsMessages.signUp.email = errors.email[1];
                    } else {
                        vm.errorsMessages.signUp.email = errors.email[0];
                    }

                    //password
                    if (errors.password.length) {
                        vm.errorsMessages.signUp.password = errors.password[0];
                    } 
                    //password_confirmation
                    if (errors.password_confirmation.length) {
                       vm.errorsMessages.signUp.password_confirmation = errors.password_confirmation[0];
                    }
                    console.log(response);
                    console.dir(vm.errorsMessages.signUp);
                    return $q.reject();
                }
            );
        }

        function signIn(enteringData) {
            return $resource('http://dev-api.mobile.design/api/auth/sign_in').saveWithHeaders(enteringData).$promise.then(
                response => redirectAfterAuth(response),
                response => {
                    // signInForm.$invalid = true;
                    console.log(response);
                }
            );
        }

        function logOut() {
            vm.model.user = {};
            vm.model.isUserAuthKeysEmpty = true;
            $state.go('signIn');
        }

        function checkUserAuthData() {
            return $resource('http://dev-api.mobile.design/api/users').get().$promise.then(
                response => {},
                response => {
                    /*  
                    -- Another method instead of mentioned below ('ms'-parameter in $timeout can be adjustable with toast showing time and less than one).
                    -- There is no need the onHidden event in app.run(), but it needs to add 'tapToDismiss: true' instead.
                    --------------------------------------------------------------------------------------------------------------------------------------
                        toastr.error('For authorized users only', 'Warning');
                        return $timeout(function() {
                            $state.go('signIn');
                        }, 6000).then(() => $q.reject());
                     */
                    console.log(response);
                    toastr.error('For authorized users only', 'Warning');
                    let defer = $q.defer();

                    $rootScope.$on('authToastrClosed', () => {
                        $timeout(function() { $state.go('signIn') }, 500);
                        defer.reject();
                    });

                    return defer.promise;
                }
            )
        }

        function setUserAuthData(param) {
            let headers = param.headers;
            vm.model.user.accesstoken = headers.accesstoken;
            vm.model.user.client = headers.client;
            vm.model.user.expiry = headers.expiry;
            vm.model.user.uid = headers.uid;
            vm.model.user.tokentype = headers.tokentype;
            vm.model.isUserAuthKeysEmpty = false;
        }

        function redirectAfterAuth(param) {
            setUserAuthData(param);
            $state.go('dashboard');
        }
    }
})();