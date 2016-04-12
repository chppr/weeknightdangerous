var config = {};

config.INSTA = {};
config.TRAILS = {};
config.GEO = {};

//auth sandbox key
config.INSTA.CLIENT_ID = "de649028be004059b5934bf34230202a";
config.INSTA.CLIENT_SECRET ="b767cde2ba1a4b1ebbef244268d79a9e";


config.REDIRECT_URL ="http://localhost:3000/handle_auth";


// the following id is not ours and should by no means be used on a public app!
config.INSTA.PIRATE_ID = 'b59fbe4563944b6c88cced13495c0f49';

//helper geocode key
config.GEO.KEY = 'abe6eb28bf565ca4aff97acb2b76db4c';

//trails api key
config.TRAILS.API_KEY = "5oxGUIheEmmshFrfXkj42LwWxlllp187YxejsnJlgk5J1ECCky";

module.exports = config;