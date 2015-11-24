/**
 * Created by Peter on 23.11.2015.
 */
angular.module("darksideApp")
  .directive("categorySort", function() {
    return {
      restrict: "E",
      templateUrl: "templates/directives/category-sort.html",
      scope: {
        time: "=",
        locations: "="
      }
    };
  });