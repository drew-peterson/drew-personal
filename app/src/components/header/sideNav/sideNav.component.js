angular.module('MainHeader')
.directive('sideNav', function(){
	return { 
		replace: true,
		templateUrl: '/../views/sideNav.public.html',
		controllerAs: 'SN',
		controller: function(){

			this.contacts = [
				{icon: 'L', link: 'linkedin.com/in/drewmpeterson'},
				{icon: 'G', link: 'github.com/weeznog '},
				{icon: 'E', link: 'drew.m.peterson@gmail.com'},
				{icon: 'P', link: '425-765-9911'}
			];
		},
		link: function(){}
	};
})