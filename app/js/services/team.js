/**
 * Created by Peter on 14.11.2015.
 */
angular.module("darksideApp")
  .service("Team", function TeamService($resource){
    return $resource("json/team.json", {}, {});
  });