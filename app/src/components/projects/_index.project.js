angular.module('Projects',[])
.controller('projects', function(){
	this.projects = [
				{
					img: '../images/wholesale.png',
					name: 'Pacifica Coffee Wholesale',
					url: 'pacifica-coffee.herokuapp.com',
					github:'github.com/weeznog/pacifica-coffee-wholesale',
					description: 'Small coffee roaster with a focus on wholesale customers only.',
					tags: ['Angular', 'Node', 'Express', 'MongoDB', 'Gulp', 'Sass'],
					status: ['Work In Progress','wip']
				},
				{
					img: '../images/lafayettefashionista.jpg',
					name: 'Lafayete Fashionista',
					url: 'pacificacoffee.herokuapp.com',
					github: 'github.com/weeznog/pacifica-coffee-wholesale',
					description: 'Informational website with admin portal & bag',
					tags: ['Angular', 'Node', 'Express', 'Pintest Api', 'Gulp', 'Sass'],
					status: ['Complete','complete']
				},
				{
					img: '../images/pacifica.png', 
					name: 'Pacifica Coffee',
					url: 'pacifica.herokuapp.com/',
					github:'github.com/weeznog/pacifica-coffee',
					description: 'Informational website with admin portal & bag',
					tags: ['Rails', 'Ruby', 'Sass', 'JQuery', 'PostgresDB'],
					status: ['Canceled','canceled']
				}
			]; 

			// side Projects

			this.sideProjects = [
				{
					img: '../images/potato.png',
					name: 'Potato Quick App',
					url: 'potato-quick-app.herokuapp.com/',
					github:'github.com/weeznog/potato-quick-app',
					description: 'Coding Challenge for Potato, use Flickr Api',
					tags: ['Angular', 'Node', 'Express', 'Flickr Api', 'Gulp', 'Sass'],
					status: ['Complete','complete']
				},
				{
					img: '../images/onhub.png',
					name: 'On Hub Clone',
					url: 'onhub-clone.herokuapp.com/',
					github:'github.com/weeznog/onhub-clone',
					description: 'Clone of google product OnHub',
					tags: ['Angular', 'Node', 'Express', 'Gulp', 'Sass'],
					status: ['Work In Progress', 'wip']
				},
					{
					img: '../images/personal.png',
					name: 'Personal Website',
					url: 'drewpeterson.me',
					github:'github.com/weeznog/drew-personal',
					description: 'My Personal Website, showing off my best work!!!',
					tags: ['Angular', 'Node', 'Express', 'Gulp', 'Sass'],
					status: ['Work In Progress','wip']
				},
			];



})