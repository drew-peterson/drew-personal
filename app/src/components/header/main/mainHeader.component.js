angular.module('MainHeader')
.directive('mainHeader',function($animate){ 
	return {
		replace: true,
		transclude: true,
		controllerAs: 'MH',
		templateUrl: '../views/mainHeader.public.html',
		controller: function(){
			var MH = this;
		},
		link: function(scope, elem, attrs, MH){
		
		}
	}
})