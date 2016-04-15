var http = require('http');
var express = require('express');
var config = require('../config');
var axios = require('axios');
var utilities = require('../utility');
var app = express();

exports.getCurrentWeather = function(req, res) {
    //get our location and distance info for the api call
    var city = req.query.city;
    var state = req.query.state;

    console.log("I am city ", city);
    console.log("I am state", state);

    var cleanCity = function (city){
       return city.split(' ').join("_").split('-').join("_");
    }

   var cleanedCity = cleanCity(city);

   state_abbr             = {
    'alabama'             :  'AL' ,
    'alaska'              :  'AK' ,
    'arizona'             :  'AZ' ,
    'arkansas'            :  'AR' ,
    'california'          :  'CA' ,
    'colorado'            :  'CO' ,
    'connecticut'         :  'CT' ,
    'delaware'            :  'DE' ,
    'district of columbia':  'DC' ,
    'florida'             :  'FL' ,
    'georgia'             :  'GA' ,
    'hawaii'              :  'HI' ,
    'idaho'               :  'ID' ,
    'illinois'            :  'IL' ,
    'indiana'             :  'IN' ,
    'iowa'                :  'IA' ,
    'kansas'              :  'KS' ,
    'kentucky'            :  'KY' ,
    'louisiana'           :  'LA' ,
    'maine'               :  'ME' ,
    'maryland'            :  'MD' ,
    'massachusetts'       :  'MA' ,
    'michigan'            :  'MI' ,
    'minnesota'           :  'MN' ,
    'mississippi'         :  'MS' ,
    'missouri'            :  'MO' ,
    'montana'             :  'MT' ,
    'nebraska'            :  'NE' ,
    'nevada'              :  'NV' ,
    'new hampshire'       :  'NH' ,
    'new jersey'          :  'NJ' ,
    'new mexico'          :  'NM' ,
    'new york'            :  'NY' ,
    'north carolina'      :  'NC' ,
    'north dakota'        :  'ND' ,
    'ohio'                :  'OH' ,
    'oklahoma'            :  'OK' ,
    'oregon'              :  'OR' ,
    'pennsylvania'        :  'PA' ,
    'rhode island'        :  'RI' ,
    'south carolina'      :  'SC' ,
    'south dakota'        :  'SD' ,
    'tennessee'           :  'TN' ,
    'texas'               :  'TX' ,
    'utah'                :  'UT' ,
    'vermont'             :  'VT' ,
    'virginia'            :  'VA' ,
    'washington'          :  'WA' ,
    'west virginia'       :  'WV' ,
    'wisconsin'           :  'WI' ,
    'wyoming'             :  'WY' 
  }

   var cleanState = function (state){
    state.toLowerCase();
      for (var key in state_abbr) {
        if (state === key) {
          state = state_abbr[key];
        }
      }
      return state;
   }
   var cleanedState = cleanState(state);


    console.log("the string clean city :", cleanCity(city));

    console.log("inside currentweather - weather.js - city is ", city);
    console.log("inside currentweather - weather.js - state is ", state);
    //replace CITY STATE
    // http://api.wunderground.com/api/e4bf38a4ac0d99b1/forecast/q/CA/San_Francisco.json
    axios({
            method: 'get',
            url: 'http://api.wunderground.com/api/e4bf38a4ac0d99b1/forecast/q/' + cleanedState + '/' + cleanedCity + '.json',
            headers: {}
        })
        .then(function(weatherData) {
            //console.log("server/api/weather.js ln22 weatherData:", weatherData);
            // construct return obj from blob
            var fiveDayWeatherArr;
            var access = weatherData.data.forecast.simpleforecast.forecastday;
            //   console.log("server/api/weather.js ln26 access is ", access);
            var day1 = {
                day_of_week: access[0].date.weekday_short,
                high_temp_f: access[0].high.fahrenheit,
                high_temp_c: access[0].high.celsius,
                low_temp_c: access[0].low.fahrenheit,
                low_temp_f: access[0].low.celsius,
                weather_icon: access[0].icon_url,
                weather_status: access[0].icon
            }
            var day2 = {
                day_of_week: access[1].date.weekday_short,
                high_temp_f: access[1].high.fahrenheit,
                high_temp_c: access[1].high.celsius,
                low_temp_c: access[1].low.fahrenheit,
                low_temp_f: access[1].low.celsius,
                weather_icon: access[1].icon_url,
                weather_status: access[1].icon
            }
            var day3 = {
                day_of_week: access[2].date.weekday_short,
                high_temp_f: access[2].high.fahrenheit,
                high_temp_c: access[2].high.celsius,
                low_temp_c: access[2].low.fahrenheit,
                low_temp_f: access[2].low.celsius,
                weather_icon: access[2].icon_url,
                weather_status: access[2].icon
            }
            var day4 = {
                day_of_week: access[3].date.weekday_short,
                high_temp_f: access[3].high.fahrenheit,
                high_temp_c: access[3].high.celsius,
                low_temp_c: access[3].low.fahrenheit,
                low_temp_f: access[3].low.celsius,
                weather_icon: access[3].icon_url,
                weather_status: access[3].icon
            }
            // var day5 = {
            //     day_of_week: access[4].date.weekday_short,
            //     high_temp_f: access[4].high.fahrenheit,
            //     high_temp_c: access[4].high.celsius,
            //     low_temp_c: access[4].low.fahrenheit,
            //     low_temp_f: access[4].low.celsius,
            //     weather_icon: access[4].icon_url,
            //     weather_status: access[4].icon
            // }
            fiveDayWeatherArr = [day1, day2, day3, day4];
           // console.log("server/api/weather.js ln74 day 5 is ", day5);
            console.log("server/api/weather.js ln75 day return is ", fiveDayWeatherArr);
            res.send(fiveDayWeatherArr);
            // return fiveDayWeatherArr;
        })
        .catch(function(err) {
            console.log("server/api/weather.js ln 78", err)
        })
}
