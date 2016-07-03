angular.module('Projects',[])
.controller('projects', function(){
	this.projects = [
				{
					img: 'http://goo.gl/21LunE',
					name: 'Pacifica Coffee',
					url: 'https://pacifica-coffee.herokuapp.com',
					github: 'https://github.com/weeznog/pacifica-coffee-wholesale'
				},
				{
					img: 'http://goo.gl/21LunE',
					name: 'Lafayete Fashionista',
					url: 'https://pacifica-coffee.herokuapp.com',
					github: 'https://github.com/weeznog/pacifica-coffee-wholesale'
				}
			];
})