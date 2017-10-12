(function() {
  'use strict';

  angular.module('app').factory('UserModel', UserModel);

  UserModel.$inject = [
    '$resource',
    '$state',
    'toastr',
    '$q',
    '$timeout',
    '$rootScope'
  ];

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
      isUserAuthKeysEmpty: true,
      serverValidationMessage: ''
    };

    vm.menu = {
      signUp: signUp,
      signIn: signIn,
      logOut: logOut,
      checkUserAuthData: checkUserAuthData,
      setUserAuthData: setUserAuthData
    };

    return {
      menu: vm.menu,
      model: vm.model
    };

    function signUp(enteringData) {
      return $resource('http://dev-api.mobile.design/api/auth')
        .saveWithHeaders(enteringData)
        .$promise.then(
          response => redirectAfterAuth(response),
          response => console.log(response)
        );
    }

    function signIn(enteringData) {
      return $resource('http://dev-api.mobile.design/api/auth/sign_in')
        .saveWithHeaders(enteringData)
        .$promise.then(
          response => {
            vm.model.serverValidationMessage = '';
            redirectAfterAuth(response);
          },
          response => {
            vm.model.serverValidationMessage = response.data.errors[0];
          }
        );
    }

    function logOut() {
      vm.model.user = {};
      vm.model.isUserAuthKeysEmpty = true;
      $state.go('signIn');
    }

    function checkUserAuthData() {
      return $resource('http://dev-api.mobile.design/api/users')
        .get()
        .$promise.then(
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
              $timeout(function() {
                $state.go('signIn');
              }, 500);
              defer.reject();
            });

            return defer.promise;
          }
        );
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
