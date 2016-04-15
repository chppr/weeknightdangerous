angular.module('trailApp.trailsList', [])

.controller('TrailsListCtrl', function (showTrails, imageService, $state, $scope) {
  var trails = this;
  trails.data = [];
  trails.city;
  trails.state;
  $scope.bgImage;

  // test background image
  // $scope.bgImage = "https://drscdn.500px.org/photo/78568715/m%3D1080_k%3D1_a%3D1/71558b5c9cb25a7060542b219fca535c"

  

  console.log("showTrails.location:",showTrails);

  imageService.px500Images({lat:47.9691, lon:-123.4983, dist:1000});

  imageService.getImages()
  .then(function(pic){
    $scope.bgImage = pic.data[randomNum()].image.high_res.url;
    console.log("$scope.bgImage:", $scope.bgImage);
  })
  .catch(function(err){
    console.log('err in BG getImage:', err);
  })

  // trails.getBackground = function(trail) {
  //   // call the service function that will store the trail in showTrails service.
  //   var trailGeo = {
  //     "lat": trail.lat,
  //     "lon": trail.lon,
  //     "dist": '1000'
  //   };
  //   imageService.px500Images(trailGeo);
  //   imageServices.getImages();

	trails.noTrials = false;

	//the below array is for the star ratings! Vital. Div will collapse if not here!
	$scope.ratings = [{
				current: 0,
				max: 5
	}];

	//to get all the trails based on user's selected city and state (collected in the location object that's passed in)
	trails.getList = function() {
		trails.loader = true;

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
				//calls the geoloc api, which calls the ig api
				console.log('AT GEO LOC CALL', placename)
        trails.background = imageService.locImages(placename);
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
		// console.log('geo loc for trail:', trailGeo);
		imageService.trailImages(trailGeo);
		showTrails.setTrail(trail);
		var id = trail.unique_id;
		//redirect to /trail and pass in the trail's unique_id as parameter
		$state.go('trail', { trailId: id});
	}
	//helper function to make sure the city and state inputed by the user are capitalized
	function capitalize(string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}

  function randomNum() {
    var result = Math.floor(Math.random() * 10);
    return result;
  }

	trails.getList()
});
