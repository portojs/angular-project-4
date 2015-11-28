/**
 * Created by Peter on 14.11.2015.
 */
angular.module("darksideApp")
  .directive("mainHeader", function() {
    return {
      restrict: "E",
      templateUrl: "templates/directives/main-header.html",
      controller: function($location, $scope){
        console.log($location.path());
        $scope.selected = 1;
        $scope.checkSelected = function(tab) {
          return $scope.selected === tab;
        };
        $scope.selectTab = function(tab) {
          $scope.selected = tab;
        }
      },
      scope: {
        selected: "="
      }
    };
  });