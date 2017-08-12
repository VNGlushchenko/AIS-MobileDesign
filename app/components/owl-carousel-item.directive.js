;
(function() {

    "use strict";

    angular
        .module("app")
        .directive("owlCarouselItem", function() {
            return {
                restrict: 'A',
                require: '^owlCarousel',
                link: function(scope, elem, attrs, owlCarouselCtrl) {
                    if (scope.$last) {
                        owlCarouselCtrl.initCarousel();
                    }
                }
            }
        })
})();