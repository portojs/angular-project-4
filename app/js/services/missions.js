/**
 * Created by Peter on 24.11.2015.
 */
angular.module("darksideApp")
  .service("Missions", function MissionsService($resource) {
    return $resource("json/missions.json", {}, {});
  });