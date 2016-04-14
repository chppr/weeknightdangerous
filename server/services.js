var dbhelpers = require('./database/dbhelpers');
var trails = require('./api/trails');


//checkCookie middleware returns a promise that resolves with true or false

exports.checkCookie =  function(req, res) {
  var session = JSON.parse(req.cookies.trailrpark).session_id;
  // console.log('this is the session?:', session)
  return dbhelpers.findUserBySession(session)
    .then(function(resp){
      console.log(resp)

      if (!!resp) {  
        res.locals.user = resp; 

        return true 
      }
      return false
    })
};

exports.addComment =  function(req, res) {
  dbhelpers.addComment(res.locals.user.user_id, Number(req.body.trailId), req.body.comment)
    .then(function(resp) {
      res.send(resp)
    })

};

exports.addFav = function(req, res) {
  dbhelpers.findUserBySession(JSON.parse(req.cookies.trailrpark).session_id)
    .then(function(user){
      return dbhelpers.addFavorite(user.user_id, req.body.trailId)
    })
    .then(function(resp){
      res.send(resp)
    })
};

exports.userFavs = function(req, res) {
  dbhelpers.findUserBySession(JSON.parse(req.cookies.trailrpark).session_id)
    .then(function(user){
      return dbhelpers.findFavsByUserID(user.user_id)
    })
    .then(function(resp){
      return Promise.all(resp.map(function(dbObj) {
        var trail = {};
        trail.query = {};
        trail.query.unique_id = dbObj.trail_id;
        return trails.singleTrail(trail) 
      }))
    })
    .then(function(resp){
      var flattenResp = resp.reduce(function(a,b){ return a.concat(b) });
      res.json(flattenResp);
    })
    .catch(function(err){
      // console.log('server userFav err:', err)
    })
};
















