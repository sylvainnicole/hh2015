(function() {
	angular
		.module('gitHubApp')
		.controller('MenuController', ['$http', function($http) {
			var vm = this;
			var currentMealIndex = 0;
			var currentSoupIndex = 0;
			var currentSideIndex = 0;
			var currentDessertIndex = 0;
			var mainDishes;
			var soups = [];
			var sides = [];
			var desserts = [];
			var flImages = [
				'app/menu/images/FL-bouton-vide.png',
				'app/menu/images/FL-bouton-demi.png',
				'app/menu/images/FL-bouton-plein.png'
			];
			var pcImages = [
				'app/menu/images/PC-bouton-vide.png',
				'app/menu/images/PC-bouton-demi.png',
				'app/menu/images/PC-bouton-plein.png'
			];
			
			var plImages = [
				'app/menu/images/PL-bouton-vide.png',
				'app/menu/images/PL-bouton-plein.png'
			];
			
			var ppImages = [
				'app/menu/images/pp-bouton-vide.png',
				'app/menu/images/pp-bouton-plein.png'
			];
			
			this.flImg = flImages[0];
			this.pcImg = pcImages[0];
			this.ppImg = ppImages[0];
			this.plImg = plImages[0];
			
			$http( {
				method: 'GET',
				url: '/api/nutri/main'
			}).then( function(response) {
				mainDishes = response.data;
				vm.currentMeal = mainDishes[0];
			});
			
			$http( {
				method: 'GET',
				url: '/api/nutri/soup'
			}).then( function(response) {
				soups = response.data;
				vm.currentSoup = soups[0];
			});		
			
			$http( {
				method: 'GET',
				url: '/api/nutri/sides'
			}).then( function(response) {
				sides = response.data;
				vm.currentSide = sides[0];
			});		
			$http( {
				method: 'GET',
				url: '/api/nutri/dessert'
			}).then( function(response) {
				desserts = response.data;
				vm.currentDessert = desserts[0];
			});					
			
			this.getMainDishes = function() {

				return mainDishes;
			};
			
			this.onSwipeLeft = function(ev) {
      			alert('You swiped left!!');
    		};
    		this.onSwipeRight = function(ev) {
      			alert('You swiped right!!');
    		};
			
			this.prevMeal = function() {
				if (currentMealIndex > 0)
					currentMealIndex--;
				vm.currentMeal = mainDishes[currentMealIndex];
				computeTotalSugar();
			};
			this.nextMeal = function() {

				if (currentMealIndex < mainDishes.length - 1 )
					currentMealIndex++;
				vm.currentMeal = mainDishes[currentMealIndex];
				computeTotalSugar();
			};
			
			this.prevSoup = function() {
				if (currentSoupIndex > 0)
					currentSoupIndex--;
				vm.currentSoup = soups[currentSoupIndex];
				computeTotalSugar();
			};
			this.nextSoup = function() {

				if (currentSoupIndex < soups.length - 1 )
					currentSoupIndex++;
				vm.currentSoup = soups[currentSoupIndex];
				computeTotalSugar();
			};
			
			this.prevSide = function() {
				if (currentSideIndex > 0)
					currentSideIndex--;
				vm.currentSide = sides[currentSideIndex];
				computeTotalSugar();
				
			};
			this.nextSide = function() {

				if (currentSideIndex < sides.length - 1 )
					currentSideIndex++;
				vm.currentSide = sides[currentSideIndex];
				computeTotalSugar();
			};
			
			this.prevDessert = function() {
				if (currentDessertIndex > 0)
					currentDessertIndex--;
				vm.currentDessert = desserts[currentDessertIndex];
				computeTotalSugar();
			};
			this.nextDessert = function() {

				if (currentDessertIndex < sides.length - 1 )
					currentDessertIndex++;
				vm.currentDessert = desserts[currentDessertIndex];
				computeTotalSugar();
			};
			function computeTotalSugar() {
				
				var fl = computeFl();
				var pp = computePp();
				var pl = computePl();
				var pc = computePc();
				
				if ( fl < 1 ) vm.flImg = flImages[0];
				if ( fl >= 1 && fl < 2) vm.flImg = flImages[1];
				if ( fl >= 2 ) vm.flImg = flImages[2];
				
				if ( pp < 1 ) vm.ppImg = ppImages[0];
				if ( pp >= 1 ) vm.ppImg = ppImages[1];
				
				if ( pl < 1 ) vm.plImg = plImages[0];
				if ( pl >= 1 ) vm.plImg = plImages[1];
				
				if ( pc < 1 ) vm.pcImg = pcImages[0];
				if ( pc >= 1 && pc < 2) vm.pcImg = pcImages[1];
				if ( pc >= 2 ) vm.pclImg = pcImages[2];
				
			};
			
			function computeFl() {
				return vm.currentMeal.category.vegetable + 
						vm.currentMeal.category.fruit +
						vm.currentSoup.category.vegetable +
						vm.currentSoup.category.fruit +
						vm.currentSide.category.vegetable +
						vm.currentSide.category.fruit +
						vm.currentDessert.category.vegetable +
						vm.currentDessert.category.fruit;
			};
			
			function computePp() {
				return vm.currentMeal.category.meat +
					vm.currentSoup.category.meat +
					vm.currentSide.category.meat +
					vm.currentDessert.category.meat;
			};
			
			function computePl() {
				return vm.currentMeal.category.milk +
					vm.currentSoup.category.milk +
					vm.currentSide.category.milk +
					vm.currentDessert.category.milk;
			};
			
			function computePc() {
				return vm.currentMeal.category.grain+
				 	vm.currentSoup.category.grain +
					 vm.currentSide.category.grain +
					 vm.currentDessert.category.grain;
			}
			
		}]);
})();