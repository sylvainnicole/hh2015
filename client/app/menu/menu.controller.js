(function() {
	angular
		.module('gitHubApp')
		.controller('MenuController', function() {
			var vm = this;
			
			var mainDishes = ['Poulet', 'Poisson', 'Steak'];
			
			this.getMainDishes = function() {

				return mainDishes;
			};
		});
})();