(function(){
	'use strict';

	var nav = angular.module('Navigation');

	nav.component('headerContent', {
		controller: headerContentCtrl,
		controllerAs: 'HC',
		templateUrl: '../views/headerContent.public.html' 
	});

	function headerContentCtrl(){
		var self = this;
		
		self.name = "Drew Peterson";
		self.title = "FrontEnd Developer";
		self.img = "../images/profile-picture.jpg";
	};
})();