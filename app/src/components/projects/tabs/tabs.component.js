angular.module('Projects')
.directive('tabs', function(){
	return {
		replace: true,
		templateUrl: '../views/tabs.public.html',
		controllerAs: 'Tabs',
		controller: function(){ 
			var Tabs = this;
			Tabs.website = true;

			this.changeTab = function(idx){
				if(idx > 0){
					Tabs.website = !Tabs.website;
					Tabs.sideProject = !Tabs.sideProject;
				}else{
					Tabs.sideProject = !Tabs.sideProject;
					Tabs.website = !Tabs.website;
				}
			} 
		}
	};
});