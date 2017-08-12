;
(function() {

    "use strict";

    angular
        .module("app")
        .config(['$stateProvider', '$locationProvider', function($stateProvider, $locationProvider) {

            $locationProvider.html5Mode(true);

            $stateProvider
                .state('dashboard', {
                    url: '/',
                    controller: 'DashboardController',
                    controllerAs: 'dc',
                    templateUrl: 'app/dashboard/dashboard.html'
                })
                .state('collections', {
                    url: '/collections',
                    controller: 'CollectionsController',
                    controllerAs: 'cc',
                    templateUrl: 'app/collections/collections.html'
                        /* ,
                        resolve: {
                            checkUserAuthData: ['UserModel', function(UserModel) {
                                return UserModel.checkUserAuthData();
                            }]
                        } */
                })
                /* .state('collections.shots', {
                    url: '/:id/shots',
                    controller: 'CollectionShotsController',
                    controllerAs: 'csc',
                    templateUrl: 'app/collections/collection.shots.html'
                }) */
                .state('collectionShots', {
                    url: '/collections/:id/shots',
                    controller: 'CollectionShotsController',
                    controllerAs: 'csc',
                    templateUrl: 'app/collections/collection.shots.html'
                }).state('shot', {
                    url: '/shots/:id',
                    controller: 'ShotController',
                    controllerAs: 'sc',
                    templateUrl: 'app/shots/shot.html'
                })
                .state('createShot', {
                    url: '/create_shot',
                    controller: 'CreateShotController',
                    controllerAs: 'crsc',
                    templateUrl: 'app/shots/create_shot.template.html',
                    resolve: {
                        checkUserAuthData: ['UserModel', function(UserModel) {
                            return UserModel.checkUserAuthData();
                        }]
                    }
                })
                .state('signIn', {
                    url: '/sign_in',
                    component: 'appSignin'
                });
        }]);
})();