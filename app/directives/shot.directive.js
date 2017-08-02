;(function(){

    "use strict";

    angular
        .module("app")
        .directive("appShot", function () {
            return {
                scope: {
                    shot: '<'
                },
                controller: ['$state', function ($state) {

                    this.goToShot = function(shotId) {
                        $state.go('shot', {id: shotId});
                    };

                    this.setHovered = function(shot) {
                        shot.hovered = true;
                    };

                    this.setNotHovered = function(shot) {
                        shot.hovered = false;
                    };

                    this.getImageUrl = function(shot) {
                        if (shot.hovered == true && shot.avatar_content_type == 'image/gif') {
                            return shot.avatar;
                        } else {
                            return shot.thumbnail;
                        }
                    }
                }],
                controllerAs: 'shotCtrl',
                restrict: 'E',
                templateUrl: "app/directives/shot.template.html"
            }
        })

})();
