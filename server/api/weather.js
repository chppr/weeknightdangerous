var http = require('http');
var express = require('express');
var config = require('../config');
var axios = require('axios');
var utilities = require('../utility');
var app = express();

exports.getCurrentWeather = function(req, res){
  //get our location and distance info for the api call
  var city = req.query.city;
  var state  = req.query.state;

  axios({
    method: 'get',
    url: 'http://api.wunderground.com/api/e4bf38a4ac0d99b1/forecast/q/' + state + '/' + city +  '.json',
    headers: {}
  })
  .then(function(weatherData){
      // construct return obj from blob
    var fiveDayWeatherArr = [day1, day2, day3, day4, day5];
    var access = weatherData.simpleforecast.forecastday;

      var day1 = {
      day_of_week : access[0].date.weekday_short,
      high_temp_f : access[0].high.fahrenheit,
      high_temp_c : access[0].high.celsius,
      low_temp_c : access[0].low.fahrenheit,
      low_temp_f : access[0].low.celsius,
      weather_icon : access[0].icon_url,
      weather_status : access[0].icon
      }
      var day2 = {
      day_of_week : access[1].date.weekday_short,
      high_temp_f : access[1].high.fahrenheit,
      high_temp_c : access[1].high.celsius,
      low_temp_c : access[1].low.fahrenheit,
      low_temp_f : access[1].low.celsius,
      weather_icon : access[1].icon_url,
      weather_status : access[1].icon
      }
      var day3 = {
      day_of_week : access[2].date.weekday_short,
      high_temp_f : access[2].high.fahrenheit,
      high_temp_c : access[2].high.celsius,
      low_temp_c : access[2].low.fahrenheit,
      low_temp_f : access[2].low.celsius,
      weather_icon : access[2].icon_url,
      weather_status : access[2].icon
      }

      var day4 = {
      day_of_week : access[3].date.weekday_short,
      high_temp_f : access[3].high.fahrenheit,
      high_temp_c : access[3].high.celsius,
      low_temp_c : access[3].low.fahrenheit,
      low_temp_f : access[3].low.celsius,
      weather_icon : access[3].icon_url,
      weather_status : access[3].icon
      }
      var day5 = {
      day_of_week : access[4].date.weekday_short,
      high_temp_f : access[4].high.fahrenheit,
      high_temp_c : access[4].high.celsius,
      low_temp_c : access[4].low.fahrenheit,
      low_temp_f : access[4].low.celsius,
      weather_icon : access[4].icon_url,
      weather_status : access[4].icon
      }

    res.json(fiveDayWeatherArr);
  })
}
