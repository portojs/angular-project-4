/**
 * Created by Peter on 19.11.2015.
 */
angular.module("darksideApp")
  .controller("TimePeriodsController", function($scope, Time){
    $scope.time = Time.query();
  });