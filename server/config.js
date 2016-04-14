var config = {};

config.INSTA = {};
config.TRAILS = {};
config.GEO = {};
config.FLICKR = {};

//flickr config
config.FLICKR.CLIENT_ID = process.env.TRAILAPP_FLICKR_KEY;
config.FLICKR.CLIENT_SECRET = process.env.TRAILAPP_FLICKR_SECRET;

//auth sandbox key
config.INSTA.CLIENT_ID = process.env.TRAILAPP_CLIENT_ID;
config.INSTA.CLIENT_SECRET = process.env.TRAILAPP_CLIENT_SECRET;



config.REDIRECT_URL = process.env.TRAILAPP_REDIRECT_URL;
//"http://localhost:3000/handle_auth";


// the following id is not ours and should by no means be used on a public app!
config.INSTA.PIRATE_ID = process.env.TRAILAPP_BACKGROUND_ID;

//helper geocode key
config.GEO.KEY = process.env.TRAILAPP_GEO_KEY;

//trails api key
config.TRAILS.API_KEY = process.env.TRAILAPP_TRAILS_KEY;

//500px api key
config.PX500_KEY = process.env.TRAILAPP_PX500_KEY;

module.exports = config;