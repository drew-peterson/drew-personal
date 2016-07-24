// (function(){
	'use strict';

	var nav = angular.module('Navigation');

	nav.component('scrollHeader', {
		templateUrl: '../views/scrollHeader.public.html',
		controller: scrollCtrl
	});

	function scrollCtrl($scope, $element){

		var self = this;
		self.$postLink = $postLink;

		// dom manipulation in angular 1.5;
		function $postLink(){
			var contact = $('#sideNav .open');

			var onScroll = function(){
				var pos = document.body.scrollTop;
				$scope.$apply(function(){
					if(pos >= 270){
						if(!self.show){
							contact.addClass('scrolled');
							self.show = true;
						}
					}else{
						if(self.show){
							contact.removeClass('scrolled');
							self.show = false;
						}
					}		
				}); // -apply
			}; // -onScroll

			// event handler attached manually need to force digest for var to update
			$(window).on('scroll', onScroll);

			// manually bond listeners need to be removed
			$scope.$on('$destroy', function(){
				$(window).off('scroll', onScroll);
				console.log('remove listener');
			});
		}
	}; //-showCtrl
// })();






// 