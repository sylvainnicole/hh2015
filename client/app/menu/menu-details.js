'use strict';

(function() {
	angular.module('gitHubApp')
		.config( function($routeProvider) {
			$routeProvider.when('/menu/details/:id', {
				templateUrl: 'app/menu/menu-details.html',
				controllser: 'MenuDetailsController',
				controllerAs: 'menuDetailsCtrl'
			});
});
})();