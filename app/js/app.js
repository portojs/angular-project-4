angular.module("darksideApp", ['ngRoute', 'ngResource'])
  .config(function(GravatarProvider) {
    GravatarProvider.setSize(80);
  });