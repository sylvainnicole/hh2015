'use strict';

(function() {
	angular.module('gitHubApp')
		.config( function($routeProvider) {
			$routeProvider.when('/menu', {
				templateUrl: 'app/menu/menu.html',
				controllser: 'MenuController',
				controllerAs: 'menuCtrl'
			});
});
})();
