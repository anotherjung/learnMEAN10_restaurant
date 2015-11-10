//MVC1a for routes
var mongoose = require('mongoose');
// var Answer = mongoose.model('Answer');
var menu = mongoose.model('Menu');

//MVC2h moved to model

//MVC2c for controller
var menus = require('../controllers/menus.js');


//start MVC1d export
module.exports = function(app) {
	var bodyParser = require('body-parser');
	app.use(bodyParser.urlencoded({
		extended: true
	}));
	app.use(bodyParser.json());

	//start routes1
	//root route to render the index.ejs view
	app.get('/', function(req, res) {
		res.render("index");
		console.log('home page loaded');
	})

	//ends routes

}//ends MVC export
