/**
 * Created by Peter on 25.11.2015.
 */
angular.module("darksideApp")
  .controller("RecruitsIndexController", function($scope, Gravatar, $location) {
    console.log($location.path());
    $scope.showing = false;
    $scope.recruit = {};
    $scope.recruits = [
      {
        name: "Bob",
        recruit: true,
        email: "bob@example.com",
        skill: "Combat"
      },
      {
        name: "Bill",
        recruit: true,
        email: "bill@example.com",
        skill: "Data"
      },
      {
        name: "Mick",
        recruit: true,
        email: "mick@example.com",
        skill: "Planning"
      },
      {
        name: "Darell",
        recruit: true,
        email: "darell@example.com",
        skill: "Data"
      },
      {
        name: "Thomson",
        recruit: true,
        email: "thomson@example.com",
        skill: "Combat"
      }
    ];
    $scope.addRecruit = function() {
      $scope.recruit.recruit = true;
      $scope.recruits.push($scope.recruit);
      $scope.recruit = {};
    };
    $scope.gravatarUrl = function(email) {
      return Gravatar(email);
    }
  });