angular.module('MainHeader')
.directive('mainHeader',function($animate){ 
	return {
		replace: true,
		transclude: true,
		controllerAs: 'MH',
		templateUrl: '../views/mainHeader.public.html',
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
					scope.$apply(function(){
						MH.trigger = true;
					})
				}else{
					scope.$apply(function(){
						MH.trigger = false;
					});
				}
			})
		}
	}
})