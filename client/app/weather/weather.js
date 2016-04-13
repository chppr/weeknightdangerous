angular.module('trailApp.weather', [])

.controller('weatherCtrl', function($window, showTrails, imageService) {
  // hit the images service so the background can load
  imageService.homeImages();

  var intro = this;
  var location = intro.location;

  intro.sendLocation = function(location) {
    //console.log('intro sendLocation: ', location)

    //send location to service showTrails.userLocation so it can be stored in the service for other controllers to access
    showTrails.userLocation(location);
    //redirect to /trailList
    $window.location.href = '/#/trailsList'
  }
});
