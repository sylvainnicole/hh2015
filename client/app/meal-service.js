'use strict';

(function() {
angular.module('gitHubApp')
	.service('mealService', function() {
		var meals = [
				{
					id: 1,
					name: 'Soupe jardinière',
					nutrive: {
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