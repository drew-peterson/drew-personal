angular.module('MainHeader')
.directive('headerContent',function(){ 
	return {
		replace: true,
		transclude: true,
		controller: function(){
			var HC = this;
			HC.name = "Drew Peterson";
			HC.title = "FrontEnd Developer";
			HC.img = "https://lh3.googleusercontent.com/rdg7kc1Uftgsg8xLiNcCYljQ52mvepBA1j-JHJpsAiIq0qu5L3k6D4GWkj1QxEYKtkyoVTB_m4E=w5120-h3200-rw-no";
		},
		controllerAs: 'HC',
		templateUrl: '../views/headerContent.html' 
	} 
})