angular.module('trailApp.weather', [])

.controller('weatherCtrl', function($scope, weather) {
   $scope.weatherChannel = 'You have the weather channel';
 // var weather = this; // controllerAs
  //  weather.weather = {};
    var location = $scope.location;
    console.log("scope.location ", location);
      console.log("I'm inside of client - weather.js ");

     $scope.getWeather = function () {
        return weather.getWeather()
          .then(function (result) {
              console.log("client/weather/weather.js ln 12 :", result);
              $scope.weatherChannel = result;
             $scope.currentlocation = result.location;
          })
          .catch(function (err){
              console.log("client/weather/weather.js ln 15 :", err);
          }) 
     }
     $scope.getWeather();
});

