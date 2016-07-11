angular.module('Projects',[])
.controller('projects', function(){
	this.projects = [
				{
					img: '../images/wholesale.png',
					name: 'Pacifica Coffee Wholesale',
					url: 'https://pacifica-coffee.herokuapp.com',
					github:'https://github.com/weeznog/pacifica-coffee-wholesale',
					description: 'Small coffee roaster with a focus on wholesale customers only.',
					tags: ['Angular', 'Node', 'Express', 'MongoDB', 'Gulp', 'Sass']
				},
				{
					img: '../images/lafayettefashionista.jpg',
					name: 'Lafayete Fashionista',
					url: 'https://www.pacifica-coffee.herokuapp.com',
					github: 'https://github.com/weeznog/pacifica-coffee-wholesale',
					description: 'Informational website with admin portal & bag',
					tags: ['Angular', 'Node', 'Express', 'Pintest Api', 'Gulp', 'Sass']
				},
				{
					img: '../images/pacifica.png', 
					name: 'Pacifica Coffee',
					url: 'http://pacifica.herokuapp.com/',
					github:'https://github.com/weeznog/pacifica-coffee',
					description: 'Informational website with admin portal & bag',
					tags: ['Rails', 'Ruby', 'Sass', 'JQuery', 'PostgresDB']
				}
			]; 

			// side Projects

			this.sideProjects = [
				{
					img: '../images/potato.png',
					name: 'Potato Quick App',
					url: 'https://potato-quick-app.herokuapp.com/',
					github:'https://github.com/weeznog/potato-quick-app',
					description: 'Coding Challenge for Potato, use Flickr Api',
					tags: ['Angular', 'Node', 'Express', 'Flickr Api', 'Gulp', 'Sass']
				},
				{
					img: '../images/potato.png',
					name: 'On Hub Clone',
					url: 'https://potato-quick-app.herokuapp.com/',
					github:'https://github.com/weeznog/potato-quick-app',
					description: 'Clone of google product OnHub',
					tags: ['Angular', 'Node', 'Express', 'Gulp', 'Sass']
				},
			];



})