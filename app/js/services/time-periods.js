/**
 * Created by Peter on 19.11.2015.
 */
angular.module("darksideApp")
  .service("Time", function TimeService($resource) {
    return $resource("json/time-periods.json", {}, {});
  });