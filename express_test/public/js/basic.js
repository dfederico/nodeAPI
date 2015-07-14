var basic = angular.module('basic', ['ui.router', 'basicControllers']);
basic.config(['$stateProvider','$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/');
      $stateProvider
        .state('matchHistory', {
          url: '/matchHistory/:summoner',
          templateUrl: 'partials/matchHistory.html',
          controller: function($scope, $stateParams) {
          	$scope.summoner = $stateParams.summoner;
          }
        })
        .state('match', {
			url:'/match/:matchId',
			templateUrl:'/partials/match.html',
			controller: function($scope, $stateParams) {
				$scope.matchId = $stateParams.matchId;
			}
		})
		.state('match.combat', {
			url:'/combat',
			templateUrl:'/partials/combat.html',
			controller:'BasicCtrl3'
		})
		.state('match.spells', {
			url:'/spells',
			templateUrl:'/partials/spells.html',
			controller:'BasicCtrl3'
		})
		.state('match.wards', {
			url:'/wards',
			templateUrl:'/partials/wards.html',
			controller:'BasicCtrl3'
		});
	 }
]);