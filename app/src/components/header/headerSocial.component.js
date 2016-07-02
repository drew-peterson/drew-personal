angular.module('MainHeader')
.directive('headerSocial',function(){ 
	return {
		replace: true,
		controller: function(){
			var HS = this;
			HS.soicalIcons = ['E','P','G','L'];
		},
		controllerAs: 'HS',
		templateUrl: '../views/headerSocial.html' 
	}
})