var http = require('http');
var express = require('express');
var axios = require('axios');
var config = require('../config');
var ig = require('./instagram');
var px500 = require('./px500');
var app = express();

exports.geocode = function(req, res){

  var placename = req.query.placename;
  axios({
    method: 'get',
    url: 'http://api.opencagedata.com/geocode/v1/json?q=' + placename + '&key=' + config.GEO.KEY,
    headers: {}
  })
  .then(function(geocode){
    //var firstResultGeo = geocode.data.results[0].geometry;
    req.query.lat = geocode.data.results[0].geometry.lat;
    req.query.lon = geocode.data.results[0].geometry.lng;
    //res.json(firstResultGeo);
    console.log("IN GEOCODE.JS!");
    // return ig.geoImages(req,res)
    return px500.geoImagesPx500(req,res)
  })
  .catch(function(err){
    console.log(err);
    return err;
  })
}
