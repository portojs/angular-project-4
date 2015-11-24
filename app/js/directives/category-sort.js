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
        locations: "=",
        activeTime: "=",
        activeLocation: "="
      },
      controller: function($scope) {
        $scope.getActiveTime = function() {
          return $scope.activeTime;
        };
        $scope.setActiveTime = function(time) {
          if ($scope.activeTime === time.name) {
            $scope.notActiveTime();
          } else {
            $scope.activeTime = time.name;
          }
        };
        $scope.notActiveTime = function() {
          $scope.activeTime = "";
        };
        $scope.getActiveLocation = function() {
          return $scope.activeLocation;
        };
        $scope.setActiveLocation = function(location) {
          if ($scope.activeLocation === location.name) {
            $scope.notActiveLocation();
          } else {
            $scope.activeLocation = location.name;
          }
        };
        $scope.notActiveLocation = function() {
          $scope.activeLocation = "";
        };
      }
    };
  });