'use strict';

(function() {
	angular.module('gitHubApp')
		.config( function($routeProvider) {
			$routeProvider.when('/profile', {
				templateUrl: 'app/profile/profile.html',
				controller: 'ProfileController',
				controllerAs: 'profileCtrl'
			});
			$routeProvider.when('/individual-profile', {
				templateUrl: 'app/profile/individual-profile.html',
				controller: 'IndividualProfilController',
				controllerAs: 'individualProfileCtrl'
			});		
	});
})();