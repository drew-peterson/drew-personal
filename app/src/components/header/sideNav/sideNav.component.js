angular.module('Navigation')
.directive('sideNav', function($animate){
	return { 
		replace: true,
		templateUrl: '/../views/sideNav.public.html',
		controllerAs: 'SN',
		controller: function(){

			this.contacts = [
				{icon: '../images/linkedin.png', link: 'linkedin.com/in/drewmpeterson', url: 'https://www.linkedin.com/in/drewmpeterson'},
				{icon: '../images/github.png', link: 'github.com/weeznog', url: 'https://www.github.com/weeznog'},
				{icon: '../images/email.png', link: 'drew.m.peterson@gmail.com', url: 'mailto:drew.m.peterson@gmail.com'},
				{icon: '../images/phone.png', link: '425-765-9911', url: 'tel:425-765-9911'}
			];
		},
		link: function(scope, elem, attrs, SN){
			var close = $('#sideNav .close');
			var open = $('#sideNav .open');
			var sideNav = $('#sideNav .contentWrap');
			var mask = $('#sideNavMask');
			var body = $('body');

			// close sideNav
			close.on('click', function(){
				closeSideNav();
			});

			// open sideNAV
			open.on('click', function(){
				body.css('overflow', 'hidden');

				scope.$apply(function(){
					$animate.removeClass(sideNav, 'hide');
					$animate.removeClass(mask, 'hide');
				});

				mask.on('click', function(){
					closeSideNav()				
				})
			});

			function closeSideNav(){
				body.css('overflow', 'auto');
				scope.$apply(function(){
					$animate.addClass(sideNav, 'hide');
					$animate.addClass(mask, 'hide');
				});
			}
		}
	};
})