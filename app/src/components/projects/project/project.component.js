angular.module("Projects")
.directive('project', function(){
	return {
		replace: true,
		templateUrl: '../views/project.public.html',
		controllerAs: 'P',
		controller: function(){
		},
		link: function(scope,elem,attrs){}
	};
});  