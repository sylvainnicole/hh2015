'use strict';

(function() {
	angular.module('gitHubApp')
		.config( function($routeProvider) {
			$routeProvider.when('/profile', {
				templateUrl: 'app/profile/profile.html',
				controllser: 'ProfileController',
				controllerAs: 'profileCtrl'
			});
});
})();