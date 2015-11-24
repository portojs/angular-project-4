/**
 * Created by Peter on 19.11.2015.
 */
angular.module("darksideApp")
  .controller("TimePeriodsController", function($scope, Time, Locations, Missions){
    $scope.time = Time.query();
    $scope.locations = Locations.query();
    $scope.missions = Missions.query();
  });