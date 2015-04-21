angular.module('basic', [])
	.controller('BasicCtrl1', function($scope, $http) {
		$scope.danno = "Hey sexy lady";

		$scope.hunt = function(summoner) {
			$http.get('/bummoner/' + summoner).
			  success(function(data, status, headers, config) {
			    console.log(data.matches);
			    $scope.games = data.matches;
			  }).
			  error(function(data, status, headers, config) {
			  	console.log('failed');
			  });
		};
		
});
