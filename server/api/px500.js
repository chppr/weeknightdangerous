var http = require('http');
var express = require('express');
var config = require('../config');
var axios = require('axios');
var utilities = require('../utility');
var app = express();

exports.geoImagesPx500 = function(req, res){
  //get our location and distance info for the api call
  var lat = req.query.lat;
  var lon = req.query.lon;
  //var dist = req.query.dist;
  console.log("GEO 550px",lat, lon);

// config.PX500.CONSUMER_KEY is env variable set with local file. In terminal => source trailenv.sh

  axios({
    method: 'get',
    url: 'https://api.500px.com/v1/photos/search?term=hiking&tag=nature&rpp=10&consumer_key=' + config.PX500_KEY + '&image_size=6&sort=times_viewed&geo=' + lat + '%2C' + lon + '%2C' + '50' + 'mi&width=%3E%3D1080&height=%3E%3D1920&image_size=1080',
    headers: {}
  })
  .then(function(px500pics){
    // res.json(px500pics.data);
    console.log("IN PX500:", px500pics);
    res.json(utilities.cleanPx500(px500pics));
    //res.json(instaPics.data);
  })
  .catch(function(err){
    console.log("ERROR in PX500",err);
    return err;
  })
}