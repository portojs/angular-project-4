/**
 * Created by Peter on 25.11.2015.
 */
angular.module("darksideApp")
  .controller("RecruitsIndexController", function($scope, Gravatar) {
    $scope.showing = false;
    $scope.recruit = {};
    $scope.recruits = [
      {
        name: "Bob",
        email: "bob@example.com",
        skill: "Combat"
      },
      {
        name: "Bill",
        email: "bill@example.com",
        skill: "Data"
      },
      {
        name: "Mick",
        email: "mick@example.com",
        skill: "Planning"
      },
      {
        name: "Darell",
        email: "darell@example.com",
        skill: "Data"
      },
      {
        name: "Thomson",
        email: "thomson@example.com",
        skill: "Combat"
      }
    ];
    $scope.addRecruit = function() {
      $scope.recruits.push($scope.recruit);
      $scope.recruit = {};
    };
    $scope.gravatarUrl = function(email) {
      return Gravatar(email);
    }
  });