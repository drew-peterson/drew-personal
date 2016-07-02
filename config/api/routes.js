'use strict';

var fs = require('fs');
var express = require('express');
var app = express();

module.exports = function(app){

	// Test Route for Mock Data
	app.get('/api', function(req,res){
	})

	// Catch All
	app.get('*', function(req, res) {
		res.sendFile('index.html', {root: 'public'});
	});
};
