/**
 * Created by Peter on 12.11.2015.
 */
angular.module("darksideApp")
  .config(["$routeProvider", function($routeProvider) {
    $routeProvider
      .when('/company', {
        templateUrl: 'templates/pages/company/index.html',
        controller: "CompanyIndexController"
      })
      .when('/missions', {
        templateUrl: 'templates/pages/missions/index.html'
      })
      .when('/recruits', {
        templateUrl: 'templates/pages/recruits/index.html'
      })
      .when('/', {
        templateUrl: 'index.html'
      })
      .otherwise({redirectTo: '/'})
  }]);