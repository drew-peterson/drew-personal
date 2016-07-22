(function(){
	'use strict';

	var nav = angular.module('Navigation');

	nav.component('scrollHeader', {
		templateUrl: '../views/scrollHeader.public.html',
		controller: scrollCtrl,
		controllerAs: 'SH'
	});

	function scrollCtrl($scope, $element){
		var self = this;
		self.showScroll;
		self.$postLink = $postLink;

		console.log($element);

		// dom manipulation in angular 1.5;
		function $postLink(){
			window.addEventListener('scroll', function(){
				var pos = document.body.scrollTop;
				var contact = $('#sideNav .open');

				// scroll almost below grayscale bar header
				if(pos >= 270){
					contact.addClass('scrolled');
			
					if(checkClass()){
						self.showScroll = true;
					};
				}else if(pos <= 270){
					contact.removeClass('scrolled');

					if(!checkClass()){
						self.showScroll = false;
					};
				}

				function checkClass(){
					var contact = $('#sideNav .open');
					return contact.hasClass('scrolled');
				};
			});
		}
	};
})();






