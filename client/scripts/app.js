angular.module('trailApp', [
  'ui.bootstrap',
  'trailApp.services',
  'trailApp.intro',
  'trailApp.topNav',
  'trailApp.bkgd',
  'trailApp.profile',
  'trailApp.myFav',
  'trailApp.comment',
  'trailApp.trailsList',
  'ngCookies',
  'ui.router',
  'ngAnimate',
  'ngMap'
  ])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider, $stateparams) {
  $urlRouterProvider.otherwise('/home');
  $stateProvider
     .state("home", {
        url: '/home',
        views: {

              'intro': { 
                templateUrl: 'app/intro/intro.html',
                controller: 'introCtrl',
                controllerAs: 'intro' 
              },
              'homeBkgd': { 
                templateUrl: 'app/homeBkgd/homeBkgd.html',
                controller: 'homeBkgdCtrl' 
              }
        }
     })
      .state("trailsList", {
        url: '/trailsList',
        views: {
      
              'trailsList': {
                templateUrl: 'app/trailsList/trailsList.html',
                controller: 'TrailsListCtrl',
                controllerAs: 'trails'
              },
              'bkgd': { 
                templateUrl: 'app/bkgd/bkgd.html',
                controller: 'bkgdCtrl' 
              }
        }
      })
      .state("trail", {
        url:'/trail/:trailId',
        views: {

              'trail': {
                templateUrl: 'app/trailProfile/trailProfile.html',
                controller: 'profileCtrl',
                controllerAs: 'profile'
              },
              'comment': {
                templateUrl: 'app/comment/comment.html',
                controller: 'commentsCtrl',
                controllerAs: 'comments'
              }
        }

      })
      .state("myFav", {
        url:'/myFav',
        views: {

              'trail': {
                templateUrl: 'app/myFav/myFav.html',
                controller: 'myFavCtrl',
                controllerAs: 'myFav'
              },
              'bkgd': { 
                templateUrl: 'app/bkgd/bkgd.html',
                controller: 'bkgdCtrl' 
              }
        }

      })

      
}])

angular.module('trailApp.services', ['ngCookies'])

.factory('showTrails', function($http) {
  var showTrails = this;
  showTrails.trailId = 0;
  showTrails.list = {};
  showTrails.location;

  //store the user's location query (city, state) in showTrails.location
  var userLocation = function(params) {
    showTrails.location = params;
    // console.log('userLocation service: ', showTrails.location);
  }

  //get trails using location (city, state) as parameters
  var getTrails = function() {
    // console.log('getLocation service location:', showTrails.location)
    return $http({
      method: 'GET', 
      url: '/api/trails/alltrails',
      params: showTrails.location
    })
    .then(function(result) {
      showTrails.list.data = result.data;
      showTrails.list.location = showTrails.location;
      // console.log("getLocation result: ", showTrails.list)
      return showTrails.list;
    })
    .catch(function(err) { console.log('postLocation error: ', err)})
  };

  //get trailId
  var getTrailId = function (trailId) {
    showTrails.trailId = trailId;
    // console.log('showTrails.trailId:', showTrails.trailId)
  };


   //to make showTrail available to the trailProfile controller
  var getTrail = function () {
    return showTrails.trail;
  }

  //to store the trail info in showTrail from the trailslist controller
  var setTrail = function(trail) {
    showTrails.trail = trail;
    return showTrails.trail;
  }

  var getTrailList = function () {

  }

  return {
    userLocation: userLocation,
    getTrails: getTrails,
    getTrail: getTrail,
    getTrailId: getTrailId,
    setTrail: setTrail
  }
})


.factory('Auth', function($cookies) {
  var cookie;
  var isUser = false;

  //check if there's cookie -ie if the user is logged in
  var checkUser = function () {
    //store cookie object in cookie
    cookie = $cookies.get('trailrpark');
    
    if (cookie !== undefined) {
      isUser = true;
      cookie = JSON.parse(cookie);
    }

    return isUser;
  };

  //get user name info
  var getUser = function () {
    if (cookie !== undefined) {
      return cookie.username;
   }
  };
  //get user image
  var getImage = function () {
    if (cookie !== undefined) {
      return cookie.image;
   }
  };
  //destroy cookie when user signs out
  var removeUser = function () {
    $cookies.remove("trailrpark");
    return isUser = false;

  }

  return {
    checkUser: checkUser,
    getUser: getUser,
    getImage: getImage,
    removeUser: removeUser
  };  
})


.factory('commentForm', function($http) {
  //post comments
  var postComments = function(comment, trailId) {
    // console.log('postComments is working', trailId, comment)
    return $http({
      method: 'POST',
      url: '/comment',
      data: {comment: comment, trailId: trailId},
      headers: {'Content-Type': 'application/json'}
    })
    .then(function (result) {
      // console.log('comment service:', result);
      return result;
    })
    .catch(function (err) {
      console.error('comments service Error: ', err);
    })    
  };

  //get comments
  var getComments = function(trailId) {
    // console.log('getComments trailId: ', trailId);
    return $http({
      method: 'POST',
      url: '/commentList',
      data: {trailId: trailId},
      headers: {'Content-Type': 'application/json'}
    })
    .then(function (result) {
      // console.log('get comment service:', result.data);
      return result.data;
    })
    .catch(function (err) {
      console.error('get comments service Error: ', err);
    })    
    
  }

  return {
    postComments: postComments,
    getComments: getComments
  } 

})

.factory('addFav', function($http, $state) {

  var postFav = function() {
   var trailId = $state.params.trailId;
    return $http({
      method: 'POST',
      url: '/addFav',
      data: {trailId: trailId},
      headers: {'Content-Type': 'application/json'}
    })
    .then(function (result) {
      // console.log('addFav service result:', result);
      return result;
    })
    .catch(function (err) {
      console.error('addFav service Error:', err);
    })
  };

  var getFav = function() {
    // console.log('services getFav is working')
    return $http({
      method: 'GET',
      url: '/myfavs',
      headers: {'Content-Type': 'application/json'}
    })
    .then(function (result) {
      // console.log('getFav service result:', result);
      return result;
    })
    .catch(function (err) {
      console.error('getFav service error', err);
    })
  };

  return {
    postFav: postFav,
    getFav: getFav
  }

})

.factory('imageService',['$q','$http',function($q,$http){
  //this factory is used by multiple controllers!
  //a collection of random locations for the homepage bg display
  //moab
  //grand teton nat'l park
  //yosemite
  //big sur
  var randomGeos = [{
      "lat": 47.9691,
      "lon": -123.4983,
      "dist": 5000
    },
    {
      "lat": 43.7904,
      "lon": -110.6818,
      "dist": 5000
    },
    {
      "lat": 37.748543,
      "lon": -119.588576,
      "dist": 5000
    },
    {
      "lat": 36.3615,
      "lon": -121.8563,
      "dist": 5000
    }
  ];
  //pick a random location
  var homeLoc = randomGeos[Math.floor(Math.random()*randomGeos.length)];
  var images = {}
  var imageServices = {};
  //get home images
  imageServices.homeImages = function(){
    //console.log('fired home images')
      images = $http({
        method: 'GET', 
        url: '/api/insta/geo',
        params: homeLoc
      })
  };
  //get city/state images
  imageServices.locImages = function(placename){
    //console.log('fired locImages')
      images = $http({
        method: 'GET', 
        url: '/api/geo/loc',
        params: placename
      })
  };
  //get trail images
  imageServices.trailImages = function(geo){
    //console.log('fired home images')
      images = $http({
        method: 'GET', 
        url: '/api/insta/geo',
        params: geo
      })
  };
  imageServices.getImages = function(){
    //console.log('fired get images', images)
    return images;  
  }
  return imageServices;
}])

    //below is for the star rating. It's ugly, but it works.
    //The below is for the star rating. Needs added functionality and user input!
.directive('starRating', function () {
    return {
        restrict: 'A',
        template: '<ul class="rating">' +
            '<li ng-repeat="star in stars" ng-class="star">' +
            '\u2605' +
            '</li>' +
            '</ul>',
        scope: {
            ratingValue: '=',
            max: '='
        },
        link: function (scope, elem, attrs) {
            scope.stars = [];
            for (var i = 0; i < scope.max; i++) {
                scope.stars.push({
                    filled: i < scope.ratingValue
                });
            }
        }
    }
});




angular.module('trailApp.intro', [])

.controller('introCtrl', function($window, showTrails, imageService) {
  // hit the images service so the background can load
  imageService.homeImages();

  var intro = this;
  var location = intro.location;

  intro.sendLocation = function(location) {
    //console.log('intro sendLocation: ', location)

    //send location to service showTrails.userLocation so it can be stored in the service for other controllers to access
    showTrails.userLocation(location);
    //redirect to /trailList
    $window.location.href = '/#/trailsList'
  }
});

var trailsApp = angular.module('trailApp.topNav', [])

.controller('topNav', function($window, Auth) {
	var nav = this;
  nav.user;
  nav.image;

  //set the signInToggle to the returned value of service function that checks
  //if the user is signed. If user is signed in the signIn button and user profile on topNav
  //should be hidden and vise versa. 
  nav.signInToggle = Auth.checkUser();; 

  nav.signIn = function () {
    //redirect user to instagram to sign in
    $window.location.assign('/authorize_user');
  };

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

angular.module('trailApp.bkgd', [])
//this controller loads up the background
.controller('bkgdCtrl', ['$scope','imageService', function ($scope,imageService) {
  //setup our empty object
  $scope.pics = {};
  //get our initianl images
  imageService.getImages()
  .then(function(data){
    $scope.pics = data;
  });

  //then watch the images for changes
  $scope.$watch(function(){
    return imageService.getImages(); // This returns a promise
  }, function(images, oldImages){
    if(images !== oldImages){ // if images promise changes reference
      images.then(function(data){
        $scope.pics = data;
        //console.log('here is our data:',$scope.pics);
      });
    }
  });
}]);

angular.module('trailApp.profile', ['ui.bootstrap'])


.controller('profileCtrl', function( $uibModal,showTrails, addFav, imageService, $scope, $state, NgMap) {
  //our map
  NgMap.getMap().then(function(map) {
    console.log(map.getCenter());
    // console.log('markers', map.markers);
    // console.log('shapes', map.shapes);
  });
  
  var profile = this;
  
  profile.data = {};
  profile.slides= {};
  profile.loading = true;
  profile.myFavAdd = true;
  profile.showModal = false;

  profile.rating; 
  
  //click image, show modal
  profile.open = function (slide) {
    profile.selected = slide
    $uibModal.open({
      template: '<my-modal modal="modal">' +
        '<div class="modal-body">' + 
          '<img class="img-responsive" src="{{ viewer.slide.image.high_res.url }}">' +
          '<a class="user-link" target="blank" href="{{viewer.slide.link}}">' +
            '<img class="img-circle profile gram-user" src="{{viewer.slide.user.profile_pic}}">' +
          '</a>' +
        '</div>' +
      '</my-modal>',
      controller: 'ModalInstanceCtrl as viewer',
      resolve: {
        items: function(){
          // console.log(profile.selected)
          return profile.selected;
        }
      }
    })
  };

  //initialize the array for the rating's directive to be displayed on html
  $scope.ratings = [{
        current: profile.rating,
        max: 5
  }];

    //get trail info from the stored value in showTrails service by using showTrails.getTrail(); 
    profile.getTrail = function() {
      profile.data = showTrails.getTrail();
      profile.rating = profile.data.rating;
     };

    profile.addFav = function() {
      return addFav.postFav()
        .then(function (result) {
          // console.log('addFavClient result:', result);
          profile.myFavAdd = false;
        })
        .catch(function (err) {
          console.error('addFavClient error:', err);
        })
    };
    
    //initialize the trail data
    profile.getTrail();


  //grab our background images
  imageService.getImages()
  .then(function(data){
    profile.slides = data;
    profile.loading = false;
  });

})
.controller('ModalInstanceCtrl', function ($uibModalInstance, items) {

    var viewer = this;

    //I want to get the vehicle data pass to populate the form myModalContent.html
    viewer.slide = items;
})

angular.module('trailApp.comment', [])

  .controller('commentsCtrl', function(Auth, commentForm, $state) {
    var comments = this;
    //set default user status to false - to hide the commentForm view
    comments.user = false;
    comments.data = [];
    //storage for username
    comments.username;
    //get trailId from $state.params and store it in the trailId variable 
    var trailId = $state.params.trailId;

    comments.isUser = function() {
      //set the comments.user status to the returned result of Auth.checkUser(), which will be either a true or false value
      comments.user = Auth.checkUser();
      //save the username in comments.username so we can use it in the comments html
      comments.username= Auth.getUser();
      //console.log('comments.user:', comments.user);
      
    }

    //get existing comments 
    comments.getComments = function() {
      return commentForm.getComments(trailId)
        .then(function (result) {
          //console.log('getComments result client:', result)
          return comments.data = result;
        })
        .catch(function (err) {
          console.error('get comments client:', err);
        })
    }

    //post a new comment
    comments.update = function(comment, isValid) {
      if (isValid) {
        return commentForm.postComments(comment,trailId)
          .then(function (result) {
            //console.log('post comments client result:', result);
            comments.getComments();  
            comments.text = '';
          })
          .catch(function (err) {
            console.error('post comments client Error:', err);
          })
      }
    };
    //initialize user status: if user is signed in on page render
    comments.isUser();
    //initialize the existing comments on page render
    comments.getComments();
  });
angular.module('trailApp.trailsList', [])

.controller('TrailsListCtrl', function (showTrails, imageService, $state, $scope) {
	var trails = this;
	trails.data = [];
  trails.city;
  trails.state;
  trails.noTrials= false;
  //the below array is for the star ratings! Vital. Div will collapse if not here!
  $scope.ratings = [{
        current: 0,
        max: 5
  }];
  //to get all the trails based on user's selected city and state (collected in the location object that's passed in)
  trails.getList = function() {
    trails.loader=true;
   
      return showTrails.getTrails()
      .then(function (result) {
        // console.log('trailsList ctrl result:', result.data)

        if (result.data.length === 0) {
          trails.noTrials = true;
        }
        trails.data = result.data;
        var location = result.location;
        trails.loader=false;
        //make sure the trailList header will have capitalized city and state regardless of user input.
        trails.city = capitalize(location.city);
        trails.state = capitalize(location.state);
        //get placename for bg
        var placename = {placename: trails.city + ',' + trails.state};
        imageService.locImages(placename);
        //end placename for bg
      })
      .catch(function(err) {
        console.log('getLocation err: ', err);
      })
  };
  //to get the trail information from the one user clicks on through ng-click and send to the showTrails service
  trails.getTrail = function(trail) {
    // call the service function that will store the trail in showTrails service.
    var trailGeo = {
      "lat": trail.lat,
      "lon": trail.lon,
      "dist": '1000'
    };
    //console.log('geo loc for trail:', trailGeo);
    imageService.trailImages(trailGeo);
    showTrails.setTrail(trail);
    var id = trail.unique_id;
    //redirect to /trail and pass in the trail's unique_id as parameter
    $state.go('trail', { trailId: id});
  }
  //helper function to make sure the city and state inputed by the user are capitalized
  function capitalize (string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  trails.getList()
});

var trailsApp = angular.module('trailApp.myFav', [])

.controller('myFavCtrl', function(addFav, showTrails, $state, $scope, imageService) {
  var myFav = this;
  myFav.data;
  myFav.noFav = false;

  //initializes rating display array for the rating directive
  $scope.ratings = [{
        current: 0,
        max: 5
  }];

  myFav.getFavList = function() {
    //fires the loader during promise
    // console.log('myFave.getFavList is working')
    myFav.loader=true;
    //get favorite trailslist
    addFav.getFav()
      .then(function(result) {
        //console.log('getFavList client result:', result.data);      
        //turn off loader after promise is resolved
        myFav.loader=false;
        //get favorite trailslist
        myFav.data = result.data;
        //console.log('myFav.data:', myFav.data)
        //check if there's no record in myFav. if so, displays the no favorite message
        if (myFav.data.length === 0) {
          myFav.noFav = true;
        }
        // console.log('getFavList client result:', result.data);
        myFav.loader=false;
        myFav.data = result.data;
        // console.log('myFav.data:', myFav.data)
      })
      .catch(function(err) {
        console.error('getFavList client error:', err);
      })
  };

  //to get the trail information from the one user clicks on through ng-click and send to the showTrails service
  myFav.getTrail = function(trail) {
    // call the service function that will store the trail in showTrails service.
    // console.log('myFav.getTrail trail:', trail)
    showTrails.setTrail(trail);
    var id = trail.unique_id;
    //redirect to /trail and pass in the trail's unique_id as parameter
    $state.go('trail', { trailId: id});
  }

  //initialize user's favorite trails list
  myFav.getFavList();

  //initialize instagram background for myFav using the generic geo list for the intro page
  imageService.getImages()
  .then(function(data){
    $scope.pics = data;
  });
   
})
