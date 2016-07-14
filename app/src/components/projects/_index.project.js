angular.module('Projects',[])
.controller('projects', function(){
	this.projects = [
				{
					img: '../images/wholesale.png',
					name: 'Pacifica Coffee Wholesale',
					url: 'http://pacificacoffee.herokuapp.com',
					github:'http://github.com/weeznog/pacifica-coffee-wholesale',
					description: 'Small coffee roaster with a focus on wholesale customers only. Admin portal and shoping bag experience.',
					tags: ['Angular', 'Node', 'Express', 'MongoDB', 'Gulp', 'Sass'],
					status: ['Work In Progress','wip']
				},
				{
					img: '../images/lafayettefashionista.jpg',
					name: 'Lafayete Fashionista',
					url: 'http://www.lafayettefashionista.com',
					github: 'http://github.com/weeznog/lafayettefashionista',
					description: 'Informational website - learn more about owner, consignment, directions and new items.',
					tags: ['Angular', 'Node', 'Express', 'Pintest Api', 'Gulp', 'Sass'],
					status: ['Complete','complete']
				},
				{
					img: '../images/pacifica.png', 
					name: 'Pacifica Coffee',
					url: 'http://pacifica.herokuapp.com/',
					github:'http://github.com/weeznog/pacifica-coffee',
					description: 'E-commerce website with admin portal, shopping bag and checkout with Stripe api.',
					tags: ['Rails', 'Ruby', 'Sass', 'JQuery', 'PostgresDB', 'Stipe Api'],
					status: ['Canceled','canceled']
				}
			]; 

			// side Projects

			this.sideProjects = [
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
					url: 'http://drewpeterson.me',
					github:'http://github.com/weeznog/drew-personal',
					description: 'My Personal Website, showing off my best work!',
					tags: ['Angular', 'Node', 'Express', 'Gulp', 'Sass'],
					status: ['Work In Progress','wip']
				},
			];



})