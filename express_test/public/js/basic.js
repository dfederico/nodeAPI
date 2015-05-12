angular.module('basic', [])
	.controller('BasicCtrl1', function($scope, $http) {
		var champJSON = '';
		var itemJSON = '';
		$scope.init = function() {
			console.log('we init!');
			$http.get('/champlist').
				success(function (data, status, headers, config) {
					champJSON = data.data;
					console.log('the champ json', champJSON);
					// var test = _.where(champJSON, 'id');
					// console.log(test);
				}).
				error(function (data, status, headers, config) {

				});
		}

		$scope.danno = "Hey sexy lady";

		$scope.hunt = function(summoner) {
			$http.get('/bummoner/' + summoner).
			  success(function (data, status, headers, config) {
			    console.log(data.matches);
			    var holder = data.matches;
			    console.log('dan fed', holder.length);
			    for(var i = 0; i < holder.length; i++) {
			    	var tempObject = _.where(champJSON, {id:holder[i].participants[0].championId});
			    	holder[i].participants[0].championId = tempObject[0].name;
			    }

			    $scope.games = holder;;
			  }).
			  error(function (data, status, headers, config) {
			  	console.log('failed');
			  });
		};
});
