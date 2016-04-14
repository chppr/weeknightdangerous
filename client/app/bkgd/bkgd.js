angular.module('trailApp.bkgd', [])
//this controller loads up the background
.controller('bkgdCtrl', ['$scope','imageService', function ($scope,imageService) {
  //setup our empty object
  $scope.pics = {};
  //get our initianl images
  imageService.getImages()
  .then(function(data){
    $scope.pics = data;
  })
	.catch(function(err){
		console.log('err in bkgdImgService:' + err);
	})
  //then watch the images for changes
//  $scope.$watch(function(){
//    return imageService.getImages(); // This returns a promise
//  }, function(images, oldImages){
//    if(images !== oldImages){ // if images promise changes reference
//      images.then(function(data){
//        $scope.pics = data;
//        //console.log('here is our data:',$scope.pics);
//      });
//    }
//  });
}]);
