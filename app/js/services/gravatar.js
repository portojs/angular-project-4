/**
 * Created by Peter on 25.11.2015.
 */
angular.module("darksideApp")
  .provider("Gravatar", function GravatarProvider() {
    var avatarSize = 90;
    var avatarUrl = "http://www.gravatar.com/avatar/";
    this.setSize = function(size) {
      avatarSize = size;
    };
    this.$get = function() {
      return function(email) {
        return avatarUrl + CryptoJS.MD5(email) + "?size:=" + avatarSize.toString();
      }
    }
  });