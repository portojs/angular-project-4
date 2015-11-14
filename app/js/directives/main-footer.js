/**
 * Created by Peter on 14.11.2015.
 */
angular.module("darksideApp")
  .directive("mainFooter", function() {
    return {
      restrict: "E",
      templateUrl: "templates/directives/main-footer.html"
    };
  });