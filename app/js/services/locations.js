/**
 * Created by Peter on 23.11.2015.
 */
angular.module("darksideApp")
  .service("Locations", function LocationsService($resource) {
    return $resource("json/locations.json", {}, {});
  });