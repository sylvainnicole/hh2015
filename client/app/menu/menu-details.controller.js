(function() {
	angular
		.module('gitHubApp')
		.controller('MenuDetailsController', ['mealService', '$routeParams', function(mealService, $routeParam) {
			var vm = this;
			this.currentMeal = mealService.getMealInfos($routeParam.id);

			
			// this.getNutriInformations = function() {
			// 	return mealService.getMealInfos($routeParam.id).nutritive;
			// };
			
			//mealService.getMealInfos($routeParam.id);
		}]);
})();