(function(){
	'use strict';

	var app = angular.module('DrewPersonalSiteApp',
		[
		'MainHeader',
		'ngAnimate'
		]
	);   

	app.component('mainContent',{
		templateUrl: '../views/main.html'
	});

})();