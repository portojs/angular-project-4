/**
 * Created by Peter on 19.11.2015.
 */
angular.module("darksideApp")
  .directive("genericList", function() {
    return {
      restrict: "E",
      templateUrl: "templates/directives/generic-list.html",
      scope: {
        list: "="
      }
    }
  });