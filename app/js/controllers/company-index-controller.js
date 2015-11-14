/**
 * Created by Peter on 14.11.2015.
 */
angular.module("darksideApp")
  .controller("CompanyIndexController", function($scope, Team){
    $scope.team = Team.query();
  });