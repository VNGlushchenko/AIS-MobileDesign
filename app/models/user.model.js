;
(function() {

    "use strict";

    angular
        .module("app")
        .factory("UserModel", UserModel);

    UserModel.$inject = ['$resource', '$state', 'toastr', '$q', '$timeout'];

    function UserModel($resource, $state, toastr, $q, $timeout) {
        let vm = this;

        vm.model = {
            user: {
                accesstoken: '',
                client: '',
                expiry: '',
                uid: '',
                tokentype: ''
            }
        };

        vm.menu = {
            signUp: signUp,
            signIn: signIn,
            logOut: logOut,
            checkUserAuthData: checkUserAuthData,
            setUserAuthData: setUserAuthData
        };

        function signUp(enteringData) {
            return $resource('http://dev-api.mobile.design/api/auth').save(enteringData).$promise.then(
                response => redirectAfterAuth(response)
            );
        }

        function signIn(enteringData) {
            return $resource('http://dev-api.mobile.design/api/auth/sign_in').save(enteringData).$promise.then(
                response => redirectAfterAuth(response),
                response => $state.go('signUp')
            );
        }

        function logOut() {
            vm.model.user = {};
            $state.go('signIn');
        }

        function checkUserAuthData() {
            return $resource('http://dev-api.mobile.design/api/users').query().$promise.then(
                    response => {},
                    response => {
                        toastr.warning('For authorized users only', 'Warning');
                        $state.go('signIn'); // закомментить эту строку, раскомментить все, что ниже
                        // $q.reject();
                    }
                )
                /* .then(
                                null,
                                () => {
                                    $timeout(redirect, 2000);

                                    function redirect() {
                                        $state.go('signIn');
                                    }
                                }
                            ); */
        }

        function redirectAfterAuth(param) {
            setUserAuthData(param);
            $state.go('dashboard');
        }

        function setUserAuthData(param) {
            let headers = param.config.headers;
            vm.model.user.accesstoken = headers.accesstoken;
            vm.model.user.client = headers.client;
            vm.model.user.expiry = headers.expiry;
            vm.model.user.uid = headers.uid;
            vm.model.user.tokentype = headers.tokentype;
        }

        return vm.menu;
    }
})();