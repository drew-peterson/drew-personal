angular.module('stateRouter',['ui.router'])
.config(function($stateProvider, $urlRouterProvider, $locationProvider){
	$urlRouterProvider.otherwise('/');   

	$stateProvider
		.state('home', { 
			url: '/',
			templateUrl: '../views/main.html'   
		}) 
    // GoogleBot SEO
    $locationProvider.html5Mode(true); 
})