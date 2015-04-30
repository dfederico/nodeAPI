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
			    	console.log(holder[i].participants[0].championId);
			    }

			    $scope.games = data.matches;
			  }).
			  error(function (data, status, headers, config) {
			  	console.log('failed');
			  });
		};
});
