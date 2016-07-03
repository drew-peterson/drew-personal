angular.module("Projects")
.directive('projectContainer', function(){
	return {
		replace: true,
		templateUrl: '../views/projectContainer.html'
	};
});  