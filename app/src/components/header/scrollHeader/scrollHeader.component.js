angular.module('MainHeader')
.directive('scrollHeader', function($animate){
	return {
		replace: true,
		templateUrl: '../views/scrollHeader.public.html',
		controller: function(){
			var SH = this;
			SH.showScrollHeader;
		},
		controllerAs: 'SH',
		link: function(scope, attrs, elem, SH){
			window.addEventListener('scroll', function(){
				var pos = document.body.scrollTop;
				var contact = $('#sideNav .open');

				// scroll almost below grayscale bar header
				if(pos >= 270){
					contact.addClass('scrolled');

					if(checkClass()){
						scope.$apply(function(){
							SH.showScrollHeader = true; 
						});
					};
				}else if(pos <= 270){
					contact.removeClass('scrolled');

					if(!checkClass()){
						scope.$apply(function(){
							SH.showScrollHeader = false;
						});
					};
				}

				function checkClass(){
					var contact = $('#sideNav .open');
					return contact.hasClass('scrolled');
				}

			})
		}

	};
});