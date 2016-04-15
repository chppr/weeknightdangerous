var db = require('./db')
var uuid = require('uuid')

var dbhelpers = {};

//Finding user:

dbhelpers.addUser = function(userObj) {
	return db('users').insert(userObj)
		.then(function(resp){
			console.log("addUser response :", resp);
			return resp
		})
};

dbhelpers.findUserByName = function(username) {
	console.log('check users tableset')
	return db('users').where({username: username})
		.then(function(resp){
			console.log("findUser response: ", resp);
			return resp[0]
		}).catch(function(err){
			console.log(err);
		})
};

dbhelpers.findUserBySession = function(session_id){
	return db('sessions').where({session_id: session_id})
	.then(function(resp){
		console.log("findUserBySession response: ", resp);
		return resp[0]
	})
};

//Session helpers:

function createSessionID (){
	return Promise.resolve(uuid.v4())
};

dbhelpers.addSession = function(userID, access_token) {
	var currentSesh;
	return createSessionID()
		.then(function(session_ID){
			currentSesh = session_ID;
			return db('sessions').insert({
				user_id: userID,
				access_token: access_token,
				session_id: session_ID
			})
		})
		.then(function(resp){
			return Object.assign({},resp, {session_id: currentSesh})
		})

};

dbhelpers.removeSession = function(userID) {};

//User favorites:

dbhelpers.addFavorite = function(userID, trailID) {
	return db('favs').insert({
			user_id: userID,
			trail_id: trailID
		})
	.then(function(resp){
		console.log('addFavorite response: ', resp);
		return resp
	})
};

dbhelpers.findFavsByUserID = function(userID) {
	return db('favs').where({user_id: userID})
		.then(function(resp){
			console.log("findtrail resp: ", resp);

			return resp
		})
};



//Comments Helpers

dbhelpers.addComment = function(userID, trailID, comment) {
	return db('comments').insert({
			user_id: userID,
			comment: comment,
			trail_id: trailID,
			created_at: new Date(),
			updated_at: new Date()
		})
		.then(function(resp){
			console.log("addComment response: ", resp)
			return resp
		})
};

dbhelpers.trailComments = function(trailID) {
	return db('comments').join('users', 'comments.user_id', '=', 'users.uid')
		.where({
			trail_id: trailID
		})
		.then(function(resp){
			console.log(resp)
			return resp
		})

};







module.exports = dbhelpers;
