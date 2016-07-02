angular.module('MainHeader')
.directive('mainHeader',function(){ 
	return {
		replace: true,
		transclude: true,
		controller: function(){
			var MH = this;
		},
		controllerAs: 'MH',
		templateUrl: '../views/mainHeader.html' 
	}
})