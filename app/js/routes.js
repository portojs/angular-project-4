/**
 * Created by Peter on 12.11.2015.
 */
angular.module("darksideApp")
  .config(["$routeProvider", function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'index.html'
      })
      .otherwise({redirectTo: '/'})
  }]);