angular.module('MainHeader')
.directive('mainHeader',function($animate){ 
	return {
		replace: true,
		transclude: true,
		controllerAs: 'MH',
		templateUrl: '../views/mainHeader.html',
		controller: function(){
			var MH = this;
			MH.trigger;
		},
		link: function(scope, elem, attrs, MH){
			window.addEventListener('scroll', function(){
				var pos = document.body.scrollTop;
				var social = $('.headerSocial');
				console.log(pos)
				// trigger bar
				if(pos >= 270){
					// social.addClass('fixed');
					// $animate.addClass(social,'fixed');
					scope.$apply(function(){
						MH.trigger = true;
					})
				}else{
					// social.removeClass('fixed');
					// $animate.removeClass(social,'fixed');
					scope.$apply(function(){
						MH.trigger = false;
					});
				}
			})
		}
	}
})