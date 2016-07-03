angular.module("Projects")
.directive('project', function(){
	return {
		replace: true,
		templateUrl: '../views/project.html',
		controllerAs: 'P',
		controller: function(){
		}
	};
});  