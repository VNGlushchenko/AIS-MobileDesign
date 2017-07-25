;(function() {

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
                })
                .state('collectionShots', {
                    url: '/collections/:id/shots',
                    controller: 'CollectionShotsController',
                    controllerAs: 'csc',
                    templateUrl: 'app/collections/collection.shots.html'
                })
                .state('shot', {
                    url: '/shots/:id',
                    controller: 'ShotController',
                    controllerAs: 'sc',
                    templateUrl: 'app/shots/shot.html'
                });
        }]);
})();