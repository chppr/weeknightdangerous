var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var path = require('path');
var trails = require('./api/trails');
var auth = require('./auth');
var db = require('./database/db');
var ig = require('./api/instagram');
var geo = require('./api/geocode');
var dbhelpers = require('./database/dbhelpers');
var cookieParser = require('cookie-parser');
var services = require('./services');
var weather = require('./api/weather');

var app = express();

app.use(cookieParser())
app.use(express.static(path.join(__dirname,'../client')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

app.get("/", function(req, res){
	res.render('index')
})

// get weather call
app.get('/weather', weather.getCurrentWeather);

// This is where you would initially send users to authorize 
app.get('/authorize_user', auth.authorize_user);

// This is your redirect URI 
app.get('/handle_auth', auth.handleauth);

// This is your 'get all trails' api call
app.get('/api/trails/alltrails', trails.allTrails);

// This is your 'get single trail' api call (requires unique_id)
app.get('/api/trails/trail', trails.singleTrail);

// This is your constrained homepage call for instagram bg images api call
app.get('/api/insta/geo', ig.geoImages);

// This is your results page bg images api call
app.get('/api/geo/loc', geo.geocode);

app.post('/comment', checkAuth, services.addComment);

app.post('/addFav', checkAuth, services.addFav);

app.get('/myfavs', checkAuth, services.userFavs);

app.post('/commentList', services.allTrailComments);


function checkAuth(req, res, next) {
  services.checkCookie(req,res)
    .then(function(result){
      console.log('authorized?: ', result);
      if(result) { return next() };
      res.status(401).send('Not Authorized')
    })
};


var port = process.env.PORT || 3000;

app.listen(port);
console.log("Listening on: ", port)
