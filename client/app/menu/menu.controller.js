(function() {
	angular
		.module('gitHubApp')
		.controller('MenuController', function() {
			var vm = this;
			var currentMealIndex = 0;
			var mainDishes = [
				{
					name: 'Poulet',
					sugar: 10,
					protein: 20,
					cereal: 30
				},
				{
					name: 'Poisson',
					sugar: 20,
					protein: 40,
					cereal: 35					
				}, 
				{
					name: 'Steak',
					sugar: 30,
					protein: 50,
					cereal: 60			
				}];
			
			this.currentMeal = mainDishes[currentMealIndex];
			
			this.getMainDishes = function() {

				return mainDishes;
			};
			
			this.onSwipeLeft = function(ev) {
      			alert('You swiped left!!');
    		};
    		this.onSwipeRight = function(ev) {
      			alert('You swiped right!!');
    		};
			
			this.totalSugar = 10;
			this.totalCereal = 20;
			this.totalProtein = 30;

			this.prevMeal = function() {
				if (currentMealIndex > 0)
					currentMealIndex--;
				vm.currentMeal = mainDishes[currentMealIndex];
			};
			this.nextMeal = function() {

				if (currentMealIndex < mainDishes.length - 1 )
					currentMealIndex++;
					vm.currentMeal = mainDishes[currentMealIndex];
				computeTotalSugar();
			};
			function computeTotalSugar() {
				vm.totalSugar = vm.currentMeal.sugar;
				vm.totalProtein	=vm.currentMeal.protein;
				vm.totalCereal = vm.currentMeal.cereal;
			};
		});
})();