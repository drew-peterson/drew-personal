
var app = angular.module('DrewPersonalSiteApp');
app.controller('ProjectCtrl', function(){
	var self = this;

	self.projects = [
			{
				img: '../images/wholesale.png',
				name: 'Pacifica Coffee Wholesale',

				url: 'http://bit.ly/29SyL8t',
				github:'http://bit.ly/2aiWhL4',
				description: 'Small coffee roaster with a focus on wholesale customers only. Admin portal and shopping bag experience.',
				tags: ['Angular', 'Node', 'Express', 'MongoDB', 'Gulp', 'Sass'],
				status: ['Work In Progress','wip']
			},
			{
				img: '../images/lafayettefashionista.jpg',
				name: 'Lafayette Fashionista',

				url: 'http://bit.ly/29WoP9g',
				github: 'http://bit.ly/2a4UGI9',
				description: 'Informational website - learn more about owner, consignment, directions and new items.',
				tags: ['Angular', 'Node', 'Express', 'Pintest Api', 'Gulp', 'Sass'],
				status: ['Complete','complete']
			},
			{
				img: '../images/pacifica.png', 
				name: 'Pacifica Coffee',
				url: 'http://bit.ly/29Wnmjw',
				github:'http://bit.ly/2am8TzA',
				description: 'E-commerce website with admin portal, shopping bag and checkout with Stripe api.',
				tags: ['Rails', 'Ruby', 'Sass', 'JQuery', 'PostgresDB', 'Stripe Api'],
				status: ['Canceled','canceled']
			}
		]; 

		// side Projects

		self.sideProjects = [ 
			{
				img: '../images/potato.png',
				name: 'Potato Quick App', 
				url: 'http://potato-quick-app.herokuapp.com/',
				github:'http://github.com/weeznog/potato-quick-app',
				description: 'Coding Challenge for Potato, using Flickr Api.',
				tags: ['Angular', 'Node', 'Express', 'Flickr Api', 'Gulp', 'Sass'],
				status: ['Complete','complete']
			},
			{
				img: '../images/onhub.png',
				name: 'On Hub Clone',
				url: 'http://onhub-clone.herokuapp.com/',
				github:'http://github.com/weeznog/onhub-clone',
				description: 'Clone of google product OnHub - on.google.com',
				tags: ['Angular', 'Node', 'Express', 'Gulp', 'Sass'],
				status: ['Work In Progress', 'wip']
			},
				{
				img: '../images/personal.png',
				name: 'Personal Website',
				url: 'http://bit.ly/2am9QI7',
				github:'http://github.com/weeznog/drew-personal',
				description: 'My Personal Website, showing off my best work!',
				tags: ['Angular', 'Node', 'Express', 'Gulp', 'Sass'],
				status: ['Work In Progress','wip']
			},
		];
});

app.component('project', {
	bindings: {
		project: '<'
	},
	templateUrl: '../views/project.public.html'

});  


