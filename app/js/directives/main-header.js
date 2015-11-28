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
        $scope.checkTab = function() {
          if ($location.path() === "/company") {
            return 1;
          } else if ($location.path() === "/recruits") {
            return 2;
          } else if ($location.path() === "/missions") {
            return 3;
          }
        };
        $scope.checkSelected = function(tab) {
          return $scope.selected === tab;
        };
        $scope.selectTab = function(tab) {
          $scope.selected = tab;
        };
        $scope.selected = $scope.checkTab();
      },
      scope: {
        selected: "="
      }
    };
  });