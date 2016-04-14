var http = require('http');
var express = require('express');
var config = require('../config');
var axios = require('axios');
var utilities = require('../utility');
var app = express();

var temp.key = "rDRcVzD651Ckj7CvKBebBvw4foWpiVr8cMZe80XC"

exports.geoImages = function(req, res){
  //get our location and distance info for the api call
  var lat = req.query.lat;
  var lon = req.query.lon;
  //var dist = req.query.dist;

//need to set config.PX500.CONSUMER_KEY env variable and change for temp.key

  axios({
    method: 'get',
    url: 'https://api.500px.com/v1/photos/search?term=hiking&tag=nature&rpp=5&consumer_key=' + config.PX500_KEY + 'image_size=6&sort=times_viewed&geo' + lat + '%2C' + lon + '%2C' + '25' + 'mi&width=%3E%3D1080&height=%3E%3D1920&image_size=1080',
    headers: {}
  })
  .then(function(px500pics){
    res.json(utilities.cleanGrams(px500pics.data));
    //res.json(instaPics.data);
  })
}

//https://api.500px.com/v1/photos/search?term=Hiking&tag=nature&rpp=10&tags=Hiking&consumer_key=rDRcVzD651Ckj7CvKBebBvw4foWpiVr8cMZe80XC&tags=trails&tags=nature&tags=fun&geo=47.9691%2C-123.4983%2C50mi&width=%3E%3D1080&height=%3E%3D1920&image_size=1080


//https://api.500px.com/v1/photos/search?term=Hiking&tag=nature&rpp=10&tags=Hiking&consumer_key=rDRcVzD651Ckj7CvKBebBvw4foWpiVr8cMZe80XC&image_size=6&sort=times_viewed&geo=47.969%2C-123.4983%2C50mi

// https://api.500px.com/v1/photos/search?term=hiking&tag=nature&rpp=48&consumer_key=rDRcVzD651Ckj7CvKBebBvw4foWpiVr8cMZe80XC&geo=36.3615%2C-121.8563%2C10mi

// url: 'https://api.instagram.com/v1/media/search?distance=' + dist + '&lat=' + lat + '&lng=' + lon + '&client_id=' +config.INSTA.PIRATE_ID + '&count=48',