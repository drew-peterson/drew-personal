angular.module('MainHeader')
.directive('headerContent',function(){ 
	return {
		replace: true,
		transclude: true,
		controller: function(){
			var HC = this;
			HC.name = "Drew Peterson";
			HC.title = "FrontEnd Developer";
			HC.img = "../images/profile-picture.jpg";
		},
		controllerAs: 'HC',
		templateUrl: '../views/headerContent.public.html' 
	} 
})