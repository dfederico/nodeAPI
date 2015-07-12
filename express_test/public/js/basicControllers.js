var basicControllers = angular.module('basicControllers', []);
var globalMatchHistory;
var champListObj;

basicControllers.controller('BasicInit', function($scope, $http) {
	$scope.init = function() {
		$http.get('/champlist').
			success(function (data, status, headers, config) {
				console.log(status + ' is the champlist results');
				champListObj = data.data;
				// champJSON = data.data;
				// var test = _.where(champJSON, 'id');
			}).
			error(function (data, status, headers, config) {
				console.log('champ data failed');
			});
	}
});
basicControllers.controller('BasicCtrl1', function($scope, $http) {
	$scope.loaded = true;
	// var champJSON = champListObj;
	// var champJSON = '';
	// var itemJSON = '';
	// $scope.init = function() {
	// 	// console.log('we init!');
	// 	$http.get('/champlist').
	// 		success(function (data, status, headers, config) {
	// 			console.log(status + headers);
	// 			champJSON = data.data;
	// 			// var test = _.where(champJSON, 'id');
	// 		}).
	// 		error(function (data, status, headers, config) {
	// 			console.log('champ data failed');
	// 		});
	// }
	$scope.champSort = function(champId) {
		// var tempObject = _.where(champJSON, {id:champId});
		var tempObject = _.where(champListObj, {id:champId});
		return tempObject[0].name;
	}
	$scope.kda = function(k,d,a) {
		if(d == 0) {
			return (k+a).toFixed(2);
		}
		else {
			return ((k+a)/d).toFixed(2);
		}
	}
	$scope.daterater = function(stamp) {
		var date = new Date(stamp);
		var retDate = "";
		var todaysDate = new Date();
		var options = {
			hour: "2-digit", minute: "2-digit", day:"numeric", month:"short"
		};
		retDate = date.toLocaleTimeString('en-us', options);
		return retDate;
	}

	$scope.hunt = function(summoner) {
		// console.log('hunt entered');
		$scope.loaded = false;
		$http.get('/bummoner/' + summoner).
		  success(function (data, status, headers, config) {
		    $scope.loaded = true;
		    console.log(data.matches);
		    var holder = data.matches;
		    $scope.games = holder;
		    globalMatchHistory = data;
		  }).
		  error(function (data, status, headers, config) {
		  	console.log('failed');
		  });
	};
});
basicControllers.controller('BasicCtrl2', function($scope, $http) {
	$scope.hello = "gday m8";
});
basicControllers.controller('BasicCtrl3', function($scope, $http, $routeParams) {
	$scope.matchId = $routeParams.matchId;
	var mid = $routeParams.matchId
	var match;
	for (var i = 0; i < globalMatchHistory.matches.length; i++) {
		if(globalMatchHistory.matches[i].matchId == mid) {
			match = globalMatchHistory.matches[i];
			$scope.match = match;
			console.log(match);
		}
	}
});





