;(function(){

  "use strict";

  angular
      .module("app")
      .component("appPlatforms", {
                templateUrl: "app/components/app-platforms.template.html",
                controller: ['PlatformsModel', function (PlatformsModel) {
                    this.model = PlatformsModel.getPlatforms.query();
                }],
                controllerAs: 'PlatformsCtrl'
          }
      )

})();