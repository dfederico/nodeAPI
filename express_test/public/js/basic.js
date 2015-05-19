angular.module('basic', [])
	.controller('BasicCtrl1', function($scope, $http) {
		var champJSON = '';
		var itemJSON = '';
		$scope.init = function() {
			// console.log('we init!');
			$http.get('/champlist').
				success(function (data, status, headers, config) {
					console.log(status + headers);
					champJSON = data.data;
					// var test = _.where(champJSON, 'id');
				}).
				error(function (data, status, headers, config) {
					console.log('champ data failed');
				});
		}

		$scope.danno = "Hey sexy lady";

		$scope.champSort = function(champId) {
			var tempObject = _.where(champJSON, {id:champId});
			// console.log(tempObject);
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
			// if(date.setHours(0,0,0,0) == todaysDate.setHours(0,0,0,0)) {
			//     var minHourOptions = {
			//     	hour:"2-digit", minute:"2-digit"
			//     }
			//     var minHour = date.toLocaleTimeString('en-us', minHourOptions);
			//     retDate = "Today, " + minHour;
			// }
			// else {
				// var options = {
				//     weekday: "long", year: "numeric", month: "short",
				//     day: "numeric", hour: "2-digit", minute: "2-digit"
				// };
				var options = {
					hour: "2-digit", minute: "2-digit", day:"numeric", month:"short"
				};

				// document.write(date.toLocaleDateString("en-US"));
				// document.write(date.toLocaleTimeString("en-us", options));
				retDate = date.toLocaleTimeString('en-us', options);
			// }
			// retDate = date.getHour();
			// return retDate;
			return retDate;
		}

		$scope.hunt = function(summoner) {
			$http.get('/bummoner/' + summoner).
			  success(function (data, status, headers, config) {
			    console.log(data.matches);
			    var holder = data.matches;
			    $scope.games = holder;;
			  }).
			  error(function (data, status, headers, config) {
			  	console.log('failed');
			  });
		};
});
