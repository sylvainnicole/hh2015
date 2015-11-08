'use strict';

(function() {
angular.module('gitHubApp')
	.service('mealService', function() {
		var meals = [
				{
					id: 1,
					name: 'Soupe jardinière',
					"nutrition": {
							"calories":122,
							"fat":5.7,
							"saturated_fat":0.6,
							"sodium":509,
							"carbohydrate":14.2,
							"sugar":13,
							"fiber":1.2,
							"protein":4
						}
				},
				{
					id: 2,
					name: 'Crème de carrottes',
					nutritive: {
						calories: 53.8,
						lipides: 0.9,
						grassatures: 0.2,
						sodium: 573, 
						glucides: 10.2,
						fibres: 1.5,
						proteines: 2						
					}					
				}, 
				{
					id:3,
					name: 'Steak',
					nutritive: {
						calories: 53.8,
						lipides: 0.9,
						grassatures: 0.2,
						sodium: 573, 
						glucides: 10.2,
						fibres: 1.5,
						proteines: 2
					}			
				}];
		this.getMealInfos = function(id) {
			return meals[id];
		}
	});
	
	})();