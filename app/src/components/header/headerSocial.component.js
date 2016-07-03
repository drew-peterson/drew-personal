angular.module('MainHeader')
.directive('headerSocial',function($animate){ 
	return {
		replace: true,
		controller: function(){
			var HS = this;

			HS.socialIcons = 
				[
					{url: 'E', details: 'Email'},
					{url: 'P', details: 'Phone'},
					{url: 'G', details: 'Github'},
					{url: 'L', details: 'LinkedIn'}
				];


			HS.selectDetail = function(idx){
				var icon = HS.socialIcons[idx].details;

				if(HS.detail === icon){
					HS.detail = undefined;
				}else{
					HS.detail = icon;
				}
			}
		},
		controllerAs: 'HS',
		link: function(scope,elem,attrs,HS){
			var details = $('.icon-details');

			scope.$watch('HS.detail', function(newVal,oldVal){
				if(newVal != undefined){
					// trigger animation
					details.removeClass('show'); // has to be none angular
					$animate.addClass(details,'show');
				}else{
					details.removeClass('show'); // has to be none angular
				}
			},true);
		},
		templateUrl: '../views/headerSocial.html' 
	}
})