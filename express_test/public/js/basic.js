var basic = angular.module('basic', ['ngRoute', 'basicControllers']);

basic.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
		when('/matchHistory', {
			templateUrl: '/partials/matchHistory.html',
			controller: 'BasicCtrl1'
		}).
		when('/wards', {
			templateUrl: '/partials/wards.html',
			controller: 'BasicCtrl2'
		}).
		when('/match/:matchId', {
			templateUrl: '/partials/match.html',
			controller: 'BasicCtrl3'
		}).
		otherwise({
			redirectTo: '/'
		});
}]);