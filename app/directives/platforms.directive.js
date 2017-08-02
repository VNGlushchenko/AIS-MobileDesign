;(function(){

  "use strict";

  angular
      .module("app")
      .directive("appPlatforms", function () {
          return {
              restrict: 'E',
              templateUrl: "app/directives/platforms.template.html",
              controller: ['PlatformsModel', function (PlatformsModel) {
                    this.model = PlatformsModel.getPlatforms.query();
                }],
                controllerAs: 'PlatformsCtrl'
          }
      })

})();