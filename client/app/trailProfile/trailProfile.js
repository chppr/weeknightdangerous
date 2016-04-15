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
    console.log("DATA FROM TRAIL PROFILE:",data)
    profile.slides = data;
    profile.loading = false;
  });

})
.controller('ModalInstanceCtrl', function ($uibModalInstance, items) {

    var viewer = this;

    //I want to get the vehicle data pass to populate the form myModalContent.html
    viewer.slide = items;
})
