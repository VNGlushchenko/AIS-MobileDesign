;
(function() {

    "use strict";

    angular
        .module("app")
        .directive("owlCarousel", function() {
            return {
                restrict: 'A',
                scope: {
                    params: '<'
                },
                controller: ['$element', function($element) {
                    this.initCarousel = function(params) {
                        $($element).owlCarousel(params);
                    }
                }]
            }
        })
})();