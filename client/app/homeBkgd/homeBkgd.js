//angular.module('trailApp.homeBkgd', [])
////this controller loads up the background
//.controller('homeBkgdCtrl', ['$scope','imageService', function ($scope,imageService) {
//  //setup our empty object
//  $scope.pics = {};
//  //get our initianl images
//  imageService.getImages()
//  .then(function(data){
//    $scope.pics = data;
//  });
//
//  //then watch the images for changes
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
//}]);
