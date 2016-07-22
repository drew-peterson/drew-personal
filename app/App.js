(function(){
	'use strict';

	var app = angular.module('DrewPersonalSiteApp',
		[
		'Navigation',
		'ngAnimate'
		]
	);   

	app.component('mainContent',{
		templateUrl: '../views/main.html'
	});

})();