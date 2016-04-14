var trailsApp = angular.module('trailApp.topNav', [])

.controller('topNav', function($window, showTrails, Auth) {
	var nav = this;
  nav.user;
  nav.image;

  //set the signInToggle to the returned value of service function that checks
  //if the user is signed. If user is signed in the signIn button and user profile on topNav
  //should be hidden and vise versa. 
  nav.signInToggle = Auth.checkUser();

  nav.signIn = function () {
    //redirect user to instagram to sign in
    $window.location.assign('/authorize_user');
  };
	
	nav.log = function(){
		showTrails.empty();
	}

  nav.myFav = function () {
    //redirect to the my favorites page
    $window.location.href = '/#/myFav';
  }

  nav.signOut = function () {
    //call the service function to remove the cookie from the client side
    Auth.removeUser();
    //console.log('Auth.cookie', Auth.cookie)
    
    //set signInToggle to false to display the sign in button and hide the sign out button
    nav.signInToggle = !nav.signInToggle;
    //redirect to home page
    $window.location.href = '/';
  }

  //get user info so we can display user profile on the topNav
  nav.getUser = function () {
    //get user's name and image from the Auth service
    nav.user = Auth.getUser();
    nav.image = Auth.getImage();
  }

  nav.getUser();

})
